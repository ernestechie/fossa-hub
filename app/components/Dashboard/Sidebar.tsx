'use client';
import { links } from '@/utils/index';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';

type SidebarProps = {
  isOpen: Boolean;
  setOpen: () => void;
  setClose: () => void;
};

export default function Sidebar({ isOpen, setOpen, setClose }: SidebarProps) {
  const pathname = usePathname();
  const path = pathname.split('/');

  return (
    <div
      className={`fixed top-0 left-0 ${isOpen ? 'w-3/12 lg:w-2/12' : 'w-1/12'}`}
    >
      <button
        aria-label='Sidebar toggle Button'
        onClick={() => {
          isOpen ? setClose() : setOpen();
        }}
        className='p-2 absolute -right-4 top-16 bg-white z-20 duration-500 border-[1px] border-gray-50 rounded-md'
      >
        {isOpen ? (
          <MdOutlineKeyboardArrowLeft />
        ) : (
          <MdOutlineKeyboardArrowRight />
        )}
      </button>
      <div className='p-4 mt-4 mb-16 flex items-center justify-center'>
        <div
          className={`bg-green-700 rounded-md duration-500 ${
            isOpen ? 'h-14 w-14' : 'h-12 w-12'
          }`}
        ></div>
      </div>
      <div>
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.page}
            style={{
              display: 'flex',
              alignItems: 'center',
              margin: '16px 0',
            }}
          >
            {isOpen && (
              <div
                className={`w-1 h-10 duration-300 ${
                  pathname === link.page ? 'bg-green-700' : 'white'
                }`}
              />
            )}
            <div
              className={`py-4 flex gap-4 w-full h-10 items-center duration-300 ${
                pathname === link.page
                  ? 'bg-green-50 text-green-700'
                  : 'white text-gray-500'
              } ${isOpen ? 'justify-start pl-6' : 'justify-center pl-0'}`}
            >
              <p>{link.icon}</p>
              {isOpen && <p className={`capitalize`}>{link.name}</p>}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
