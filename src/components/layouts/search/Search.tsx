'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PostMatter } from '@/shared/types';
import { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { SearchItem } from './SearchItem';

interface SearchProps {
  posts: {
    metadata: PostMatter;
    slug: string;
  }[];
}

export const Search = ({ posts }: SearchProps) => {
  const [query, setQuery] = useState('');

  const filteredPosts = posts.filter(({ metadata }) => {
    const q = query.toLowerCase();
    return (
      metadata.title.toLowerCase().includes(q) ||
      metadata.description.toLowerCase().includes(q)
    );
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='ghost' size='icon'>
          <IoIosSearch className='h-[1.5rem] w-[1.5rem]' />
        </Button>
      </DialogTrigger>
      <DialogContent className='w-[90%] rounded-xl border bg-background p-6 text-foreground shadow-lg sm:max-w-2xl'>
        <DialogHeader>
          <DialogTitle className='text-lg font-bold text-blue-700 dark:text-blue-400'>
            블로그 검색
          </DialogTitle>
        </DialogHeader>
        <div className='flex flex-col gap-4'>
          <div className='grid gap-2'>
            <Label htmlFor='search' className='sr-only'>
              검색어
            </Label>
            <Input
              id='search'
              placeholder='검색어를 입력하세요.'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className='mt-2 max-h-[40vh] overflow-y-auto rounded border p-3'>
            {filteredPosts.length > 0 ? (
              filteredPosts.map(({ metadata, slug }) => (
                <SearchItem key={slug} title={metadata.title} slug={slug} />
              ))
            ) : (
              <p className='text-muted-foreground text-sm'>
                검색 결과가 없습니다.
              </p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
