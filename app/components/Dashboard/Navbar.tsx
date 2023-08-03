import { links } from '@/utils/index';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CgMenu } from 'react-icons/cg';
import AdminAvatar from './AdminAvatar';

export default function Navbar({ isOpen }: { isOpen: boolean }) {
  const pathname = usePathname();

  const path = pathname.split('/');

  return (
    <div
      className={`border-b-[1px] border-b-gray-100 p-4 flex items-center justify-between sm:px-8 md:px-16 fixed top-0 left-0 w-full z-10 bg-white ${
        isOpen
          ? 'md:left-[25%] lg:left-[16.66%] md:w-9/12 lg:w-5/6'
          : 'md:left-[8.33%] md:w-11/12'
      }`}
    >
      <p className='font-bold capitalize text-xl text-gray-700'>
        {path[1]}
        {' / '}
        {path[2]}
      </p>
      <div>
        <AdminAvatar />

        <div>{/* Menu */}</div>
      </div>
    </div>
  );
}
