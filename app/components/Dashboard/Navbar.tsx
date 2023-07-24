import { links } from '@/utils/index';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CgMenu } from 'react-icons/cg';
import AdminAvatar from './AdminAvatar';

export default function Navbar() {
  const pathname = usePathname();

  const path = pathname.split('/');

  return (
    <div className='border-b-[1px] border-b-gray-50 p-4 flex items-center justify-between sm:px-8 md:px-16'>
      <p className='font-bold capitalize text-lg'>
        {path.length > 2 ? path[2] : path[1]}
      </p>
      <div>
        <div>
          <AdminAvatar />
        </div>
        <div>{/* Menu */}</div>
      </div>
    </div>
  );
}
