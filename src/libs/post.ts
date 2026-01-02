import { Heading, PostMatter } from '@/shared/types';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { sync } from 'glob';

const MDX_DIR = 'src/data/posts';
const POSTS_DIR = path.join(process.cwd(), MDX_DIR);

export const getPostPaths = (category?: string) => {
  const folder = category || '**';
  const postPaths: string[] = sync(`${POSTS_DIR}/${folder}/**/*.mdx`);
  return postPaths;
};

//dir_name -> Dir Name
export const getCategoryName = (dirPath: string) =>
  dirPath
    .split('_')
    .map((token) => token[0].toUpperCase() + token.slice(1, token.length))
    .join(' ');

const parsePostDetail = (filePath: string) => {
  const file = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(file);
  const metadata = data as PostMatter;
  return { metadata, content };
};

export const parsePostAbstract = (postPath: string) => {
  const normalizedPath = postPath.split(path.sep).join('/');
  const filePath = normalizedPath
    .slice(normalizedPath.indexOf(MDX_DIR))
    .replace(`${MDX_DIR}/`, '')
    .replace('.mdx', '');

  const [categoryPath, slug] = filePath.split('/');
  const url = `/posts/${categoryPath}/${slug}`;
  const categoryName = getCategoryName(categoryPath);
  return { url, categoryPath, categoryName, slug };
};

const parsePost = (postPath: string) => {
  const postAbstract = parsePostAbstract(postPath);
  const postDetail = parsePostDetail(postPath);
  return {
    ...postAbstract,
    ...postDetail,
  };
};

export const getAllPosts = (category?: string) => {
  const postPaths = getPostPaths(category);
  const postList = postPaths.map((postPath) => parsePost(postPath));

  const sortedPostList = postList.sort((a, b) => {
    const dateA = new Date(a.metadata.date).getTime();
    const dateB = new Date(b.metadata.date).getTime();
    return dateB - dateA;
  });
  return sortedPostList;
};

export const getPostDetail = (category: string, slug: string) => {
  const filePath = `${POSTS_DIR}/${category}/${slug}.mdx`;
  const detail = parsePost(filePath);

  return detail;
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
