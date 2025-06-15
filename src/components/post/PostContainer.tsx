import { cn } from '@/lib/utils';

export const PostContainer = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <section className={cn('mx-auto flex w-full max-w-3xl flex-col', className)} {...props}>
      {children}
    </section>
  );
};
