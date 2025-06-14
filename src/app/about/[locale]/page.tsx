import { Locale, RESUME } from '@/config/types';

export function generateStaticParams() {
  return Object.keys(RESUME).map((locale) => ({ locale }));
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale as Locale;
  const RESUME_DATA = RESUME[locale].data;

  return (
    <div>
      <h1>About</h1>
      <p>{RESUME_DATA.about}</p>
    </div>
  );
}
