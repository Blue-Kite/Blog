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
import { IoIosSearch } from 'react-icons/io';

export const Search = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='ghost' size='icon'>
          <IoIosSearch size={26} className='text-foreground' />
        </Button>
      </DialogTrigger>
      <DialogContent className='bg-background text-foreground w-[90%] rounded-xl border p-6 shadow-lg sm:max-w-2xl'>
        <DialogHeader>
          <DialogTitle className='text-lg font-semibold text-blue-700 dark:text-blue-400'>
            블로그 검색
          </DialogTitle>
        </DialogHeader>

        <div className='flex flex-col gap-4'>
          <div className='grid gap-2'>
            <Label htmlFor='search' className='sr-only'>
              검색어
            </Label>
            <Input id='search' placeholder='검색어를 입력하세요.' />
          </div>
          <div className='mt-2 max-h-[40vh] overflow-y-auto'>
            <p className='text-muted-foreground text-sm'>검색 결과가 여기에 표시됩니다.</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
