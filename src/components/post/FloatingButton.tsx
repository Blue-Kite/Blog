'use client';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { useState } from 'react';
import { IoSettingsOutline as Setting } from 'react-icons/io5';
import { Button } from '../ui/button';
import { cn } from '@/libs/utils';
import { CopyLinkButton } from './TocButtons/CopyLinkButton';
import { ScrollToComment, ScrollTop } from './TocButtons/ScrollButtons';

export const FloatingButton = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => setVisible((prev) => !prev);
  const handleOutsideClick = () => setVisible(false);

  const buttonRef = useOutsideClick<HTMLButtonElement>(handleOutsideClick);

  return (
    <div className='group fixed bottom-4 right-4 xl:hidden'>
      <div className='group relative flex flex-col-reverse'>
        <Button
          size='icon'
          variant={visible ? 'default' : 'outline'}
          onClick={toggleVisible}
          ref={buttonRef}
          className={cn('absolute bottom-0 right-0 z-10 transition')}
        >
          <Setting size={20} />
        </Button>
        <CopyLinkButton
          size={20}
          className={cn(
            'absolute bottom-0 right-0 transition',
            visible && '-translate-y-12',
          )}
        />
        <ScrollToComment
          size={20}
          className={cn(
            'absolute bottom-0 right-0 transition',
            visible && '-translate-y-24',
          )}
        />
        <ScrollTop
          className={cn(
            'absolute bottom-0 right-0 transition',
            visible && '-translate-y-36',
          )}
          size={20}
        />
      </div>
    </div>
  );
};
