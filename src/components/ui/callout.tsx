import { cn } from '@/libs/utils';
import { ComponentType, PropsWithChildren } from 'react';
import { GrInfo } from 'react-icons/gr';

type CalloutType = 'info' | 'warn' | 'danger' | 'normal';

interface CalloutProps extends PropsWithChildren {
  type?: CalloutType;
  title?: string;
}

interface IconType {
  [key: string]: {
    icon: ComponentType;
    styles: string;
  };
}

const metadata: IconType = {
  info: {
    icon: GrInfo,
    styles: 'text-informative-foreground bg-informative',
  },
  danger: {
    icon: GrInfo,
    styles: 'text-destructive-foreground bg-destructive',
  },
  warn: {
    icon: GrInfo,
    styles: 'text-warning-foreground bg-warning',
  },
  normal: {
    icon: GrInfo,
    styles: 'text-secondary-foreground bg-secondary',
  },
};

export const Callout = (props: CalloutProps) => {
  const type = props.type || 'normal';
  const metaObj = metadata[type];
  const Icon = metaObj.icon;
  const boxClassName = metaObj.styles;

  return (
    <div
      className={cn(
        'my-6 flex items-center gap-3 rounded-md px-5 py-4',
        boxClassName,
      )}
    >
      {type !== 'normal' && (
        <div>
          <Icon />
        </div>
      )}

      <div className='callout-contents flex-1'>
        {props.title && (
          <span style={{ fontWeight: 'bold' }}>{props.title}</span>
        )}
        {props.children}
      </div>
    </div>
  );
};
