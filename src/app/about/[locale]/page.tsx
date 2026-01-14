import LanguageSelector from '@/components/about/LanguageSelector';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Section } from '@/components/ui/section';
import { Locale, RESUME } from '@/shared/types';
import { IoIosGlobe } from 'react-icons/io';
import * as D from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CopyLinkButton } from '@/components/common/CopyLinkButton';
import { IoMailOutline } from 'react-icons/io5';
import { cn } from '@/libs/utils';

export function generateStaticParams() {
  return Object.keys(RESUME).map((locale) => ({ locale }));
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale as Locale;
  const RESUME_DATA = RESUME[locale].data;

  return (
    <main className='mx-auto flex w-full max-w-3xl flex-col'>
      <div className='w-full py-5'>
        <LanguageSelector className='m-auto border border-black print:hidden' />
      </div>
      <Section>
        <div className='flex flex-col-reverse items-center justify-between gap-4 sm:flex-row'>
          <div className='flex-1 space-y-1.5 text-center sm:text-start'>
            <h1 className='mb-4 text-3xl font-bold'>{RESUME_DATA.name}</h1>
            <p className='text-muted-foreground max-w-md text-pretty print:text-[12px]'>
              {RESUME_DATA.about}
            </p>
            <p className='text-muted-foreground max-w-md items-center text-pretty text-sm'>
              <a
                className='inline-flex items-center gap-x-1.5 align-baseline leading-none hover:underline'
                href={RESUME_DATA.locationLink}
                target='_blank'
              >
                <IoIosGlobe className='size-3' />
                {RESUME_DATA.location}
              </a>
            </p>
            <div className='text-muted-foreground flex justify-center gap-x-2 pt-1 text-sm sm:justify-start print:hidden'>
              {RESUME_DATA.contact.email && (
                <D.Dialog>
                  <D.DialogTrigger>
                    <Button
                      className='size-8'
                      variant='outline'
                      size='icon'
                      asChild
                    >
                      <IoMailOutline className='size-4' />
                    </Button>
                  </D.DialogTrigger>
                  <D.DialogContent className='max-w-[300px]'>
                    <D.DialogHeader>
                      <D.DialogTitle className='p-0'>
                        Email Address
                      </D.DialogTitle>
                    </D.DialogHeader>
                    <div className='flex flex-row items-center space-x-3'>
                      <div className='grid flex-1 gap-2'>
                        <label htmlFor='link' className='sr-only'>
                          Link
                        </label>
                        <Input
                          id='link'
                          defaultValue={RESUME_DATA.contact.email}
                          readOnly
                        />
                      </div>
                      <CopyLinkButton
                        variant='outline'
                        url={RESUME_DATA.contact.email}
                        className='p-3'
                      />
                    </div>
                  </D.DialogContent>
                </D.Dialog>
              )}
            </div>
          </div>
          <Avatar className='size-28'>
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>
      </Section>
      <Section>
        <h2 className='text-2xl font-bold'>About</h2>
        <p
          className={cn(
            'text-muted-foreground text-pretty leading-8 print:text-[12px]',
            RESUME[locale].aboutClassName,
          )}
        >
          {RESUME_DATA.summary}
        </p>
      </Section>
    </main>
  );
}
