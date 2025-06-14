import LanguageSelector from '@/components/about/language-selector';
import { Locale, RESUME } from '@/config/types';

export function generateStaticParams() {
  return Object.keys(RESUME).map((locale) => ({ locale }));
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale as Locale;
  const RESUME_DATA = RESUME[locale].data;

  return (
    <section className='mx-auto flex w-full max-w-3xl flex-col'>
      <div className='w-full py-5'>
        <LanguageSelector className='m-auto border border-black' />
      </div>
      <p>{RESUME_DATA.about}</p>
    </section>
  );
}
