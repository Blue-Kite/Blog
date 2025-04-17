import { MDXRemote } from 'next-mdx-remote/rsc';
import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import { ComponentProps, PropsWithChildren } from 'react';
import rehypePrettyCode from 'rehype-pretty-code';

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

type CustomImageProps = Omit<ImageProps, 'alt'> & {
  alt: string;
};

function CustomImage({ alt, ...props }: CustomImageProps) {
  return <Image alt={alt} {...props} className='mx-auto rounded-md' priority />;
}

const mdxComponents = {
  a: CustomLink,
  Image: CustomImage,
};

export function Mdx({ components, source }: any) {
  return (
    <article className='prose dark:prose-invert prose-a:break-all max-w-3xl break-keep'>
      <MDXRemote
        source={source}
        components={{ ...mdxComponents, ...(components || {}) }}
        options={{
          mdxOptions: {
            rehypePlugins: [
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
