import { MDXRemote, type MDXRemoteProps } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { type ComponentProps, type PropsWithChildren } from 'react';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import remarkBreaks from 'remark-breaks';
import rehypeUnwrapImages from 'rehype-unwrap-images';
import { Callout } from './ui/callout';

type CustomLinkProps = PropsWithChildren<
  {
    href: string;
  } & Omit<ComponentProps<'a'>, 'href'>
>;

function CustomLink({ children, href, ...props }: CustomLinkProps) {
  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }
  if (href.startsWith('#')) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }
  return (
    <a href={href} target='_blank' rel='noreferrer' {...props}>
      {children}
    </a>
  );
}

type CustomImageProps = ComponentProps<'img'> & {
  alt: string;
};

function CustomImage({ alt, ...props }: CustomImageProps) {
  return <img alt={alt} {...props} className='mx-auto block rounded-md' />;
}

const mdxComponents = {
  a: CustomLink,
  img: CustomImage,
  blockquote: Callout,
  Callout,
};

export function Mdx({ components, source }: MDXRemoteProps) {
  return (
    <article className='prose max-w-3xl break-keep dark:prose-invert prose-a:break-all'>
      <MDXRemote
        source={source}
        components={{ ...mdxComponents, ...(components || {}) }}
        options={{
          mdxOptions: {
            remarkPlugins: [
              remarkGfm,
              remarkBreaks, // mdx 1줄 개행 지원
            ],
            rehypePlugins: [
              rehypeSlug,
              rehypeUnwrapImages,
              [
                rehypePrettyCode,
                {
                  theme: { dark: 'github-dark-dimmed', light: 'github-light' },
                },
              ],
            ],
          },
        }}
      />
    </article>
  );
}
