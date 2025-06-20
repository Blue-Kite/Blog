import { Heading, PostMatter } from '@/shared/types';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const MDX_DIR = 'src/data/posts';
const ROOT_DIR = path.join(process.cwd(), MDX_DIR);

const getMdxFiles = () => fs.readdirSync(ROOT_DIR).filter((file) => path.extname(file) === '.mdx');

const readMdxFile = (filePath: string) => {
  const file = fs.readFileSync(filePath, 'utf8');

  const { data, content } = matter(file);
  const metadata = data as PostMatter;
  return { metadata, content };
};

export const getAllPosts = () => {
  const mdxFiles = getMdxFiles();
  return mdxFiles
    .map((file) => {
      const { metadata, content } = readMdxFile(path.join(ROOT_DIR, file));
      const slug = path.basename(file, '.mdx');
      return { metadata, content, slug };
    })
    .sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime());
};

export const getPostDetail = (slug: string) => {
  const filePath = path.join(process.cwd(), MDX_DIR, `${slug}.mdx`);
  const detail = readMdxFile(filePath);
  return { ...detail, slug };
};

export const parseToc = (content: string): Heading[] => {
  const regex = /^(##|###) (.*$)/gim;
  const headingList = content.match(regex);
  return (
    headingList?.map((heading: string) => ({
      text: heading.replace('##', '').replace('#', ''),
      link:
        '#' +
        heading
          .replace('# ', '')
          .replace('#', '')
          .replace(/[\[\]:!@#$/%^&*()+=,.]/g, '')
          .replace(/ /g, '-')
          .toLowerCase()
          .replace('?', ''),
      indent: (heading.match(/#/g)?.length || 2) - 2,
    })) || []
  );
};
