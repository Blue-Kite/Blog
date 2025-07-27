'use client';

import { Button } from '@/components/ui/button';
import { BiArrowToTop } from 'react-icons/bi';
import { BiCommentDetail } from 'react-icons/bi';

interface ButtonProps {
  size?: number;
  className?: string;
}

export const ScrollTop = ({ size = 16, className }: ButtonProps) => {
  const scrollTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <Button
      variant='outline'
      size='icon'
      onClick={scrollTop}
      className={className}
    >
      <BiArrowToTop size={size} />
    </Button>
  );
};

export const ScrollToComment = ({ size = 16, className }: ButtonProps) => {
  const scrollToGiscus = () =>
    document.querySelector('.giscus')?.scrollIntoView();

  return (
    <Button
      variant='outline'
      size='icon'
      onClick={scrollToGiscus}
      className={className}
    >
      <BiCommentDetail size={size} />
    </Button>
  );
};
