import Link from 'next/link';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

export default function AdminAvatar() {
  const name = 'Isaiah Ernest';
  const initials = name.split(' ');

  return (
    <Link
      href='/dashboard/account'
      className='flex items-center gap-4 p-2 bg-orange-50 rounded-lg'
    >
      <div className='h-12 w-12 bg-orange-900 rounded-full flex items-center justify-center'>
        <span className='text-xl font-bold text-white'>
          {initials[0][0]} {initials[1][0]}
        </span>
      </div>
      <div>
        <p className='leading-3 text-lg font-bold text-gray-800'>
          Isaiah Ernest
        </p>
        <p className='text-gray-500'>Super Admin</p>
      </div>
      <MdOutlineKeyboardArrowRight />
    </Link>
  );
}
