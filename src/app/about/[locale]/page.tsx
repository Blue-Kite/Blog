import { Locale, RESUME } from '@/config/types';

interface Props {
  params: {
    locale: Locale;
  };
}

export function generateStaticParams() {
  return Object.keys(RESUME).map((locale) => ({ locale }));
}

export default function AboutPage({ params: { locale } }: Props) {
  const RESUME_DATA = RESUME[locale].data;

  return (
    <div>
      <h1>About</h1>
      <p>{RESUME_DATA.about}</p>
    </div>
  );
}
