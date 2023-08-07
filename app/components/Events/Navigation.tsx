'use client';
import { eventLinks } from '@/utils';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { BsPlus } from 'react-icons/bs';

const Navigation = () => {
  const filter_by = useSearchParams().get('filter');

  return (
    <div className='mb-16 flex items-center justify-between'>
      <ul className='flex items-center gap-4'>
        {eventLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={`/dashboard/events?filter=${link.search}`}
              className={`flex items-center justify-center flex-col gap-1 capitalize font-medium duration-500 ${
                filter_by?.toLowerCase() === link.name.toLowerCase() ||
                (filter_by === null && link.name.toLowerCase() === 'all')
                  ? 'text-orange-700 mb-0'
                  : 'text-gray-400 mb-1'
              }`}
            >
              {link.name}
              <span
                className={`duration-500 block h-[0.125rem] w-4 bg-orange-700 rounded-full ${
                  filter_by?.toLowerCase() === link.name.toLowerCase() ||
                  (filter_by === null && link.name.toLowerCase() === 'all')
                    ? '-translate-x-0 opacity-100 w-4'
                    : '-translate-x-2 opacity-0 w-0'
                }`}
              ></span>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href={'/dashboard/events/new'}
        className='flex justify-center space-x-1'
      >
        <button
          type='button'
          className='btn bg-orange-700 text-gray-50 hover:bg-orange-800'
        >
          <BsPlus className='text-xl' />
          <span>Create Event</span>
        </button>
      </Link>
    </div>
  );
};

export default Navigation;
