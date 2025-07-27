'use client';

import { useTheme } from 'next-themes';
import { Toaster as Sonner } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className='toaster group'
      position='bottom-right'
      toastOptions={{
        classNames: {
          toast: 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white',
          success: '!bg-green-50 !text-green-800',
          error: '!bg-red-50 !text-red-800',
          info: '!bg-blue-50 !text-blue-800',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
