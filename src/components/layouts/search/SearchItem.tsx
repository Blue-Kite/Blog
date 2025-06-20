import { DialogClose } from '@/components/ui/dialog';
import Link from 'next/link';

interface SearchItemProps {
  title: string;
  slug: string;
}

export const SearchItem = ({ title, slug }: SearchItemProps) => {
  return (
    <DialogClose asChild>
      <Link
        href={`/post/${slug}`}
        className='block cursor-pointer border-transparent p-2 hover:text-blue-700 focus:border-blue-900'
      >
        {title}
      </Link>
    </DialogClose>
  );
};
