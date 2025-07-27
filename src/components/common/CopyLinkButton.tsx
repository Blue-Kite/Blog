'use client';

import { Button } from '@/components/ui/button';
import useWatchTimeout from '@/hooks/useWatchTimeout';
import { useState } from 'react';
import { IoCopyOutline as Copy } from 'react-icons/io5';
import { IoCheckmark as Check } from 'react-icons/io5';
import { toast } from 'sonner';

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

  const handleCopy = async () => {
    const copyUrl = url ? url : window.document.location.href;
    try {
      await navigator.clipboard.writeText(copyUrl);
      setCopied(true);
      toast.success('Successfully Copied');
    } catch (e) {
      console.error(e);
      toast.error('Copy Failed');
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
