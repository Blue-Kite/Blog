import ThemeSwitch from './theme/ThemeSwitch';
import { Search } from './search/Search';
import { getAllPosts } from '@/libs/post';
import { NavItem } from './nav/NavItem';

const navList = [
  { name: 'KiteDev', href: '/' },
  //{ name: 'About', href: '/about' },
];

export const Header = () => {
  const posts = getAllPosts();

  return (
    <header className='flex h-[45px] w-full flex-col items-center justify-center border-b px-4 shadow-sm sm:h-[60px] sm:px-[50px]'>
      <div className='flex h-full w-full items-center justify-between'>
        <div className='flex flex-row items-center gap-[20px]'>
          {navList.map((navItem) => (
            <NavItem
              key={navItem.name}
              name={navItem.name}
              href={navItem.href}
            />
          ))}
        </div>
        <div className='flex gap-3'>
          <Search posts={posts} />
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
};
