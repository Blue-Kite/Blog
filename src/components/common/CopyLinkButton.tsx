'use client';

import { Button } from '@/components/ui/button';
import useWatchTimeout from '@/hooks/useWatchTimeout';
import { useState } from 'react';
import { IoCopyOutline as Copy } from 'react-icons/io5';
import { IoCheckmark as Check } from 'react-icons/io5';
//import { MdOutlineSmsFailed as Fail } from 'react-icons/md';

interface ButtonProps {
  size?: number;
  className?: string;
  url?: string;
  variant?: 'outline' | 'default';
}

export const CopyLinkButton = ({
  size = 16,
  className,
  url,
  variant = 'outline',
}: ButtonProps) => {
  const [copied, setCopied] = useState(false);

  useWatchTimeout(copied, 3000, () => {
    setCopied(false);
  });

  // const SuccessToastTitle = (
  //   <div className='flex items-center gap-3'>
  //     <Check size={16} /> Successfully Copied
  //   </div>
  // );

  // const FailToastTitle = (
  //   <div className='flex items-center gap-3'>
  //     <Fail size={16} /> Copy Failed
  //   </div>
  // );

  const handleCopy = async () => {
    const copyUrl = url ? url : window.document.location.href;
    try {
      await navigator.clipboard.writeText(copyUrl);
      setCopied(true);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Button
      variant={variant}
      size='icon'
      onClick={handleCopy}
      className={className}
    >
      <span className='sr-only'>Copy</span>
      {copied ? <Check size={size} /> : <Copy size={size} />}
    </Button>
  );
};
