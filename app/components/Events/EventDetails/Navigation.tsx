'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const links = [
  { name: 'overview', page: '' },
  { name: 'tickets', page: '/tickets' },
  { name: 'verification', page: '/verification' },
  { name: 'settings', page: '/settings' },
];

const Navigation = ({ slug }: { slug: string }) => {
  const pathname = usePathname();

  return (
    <div className='details-nav max-w-[430px]'>
      {links.map((link) => (
        <Link
          key={link.name}
          href={`/dashboard/events/${slug}${link.page}`}
          className={`details-nav-link capitalize ${
            pathname === `/dashboard/events/${slug}${link.page}`
              ? 'bg-orange-800 text-white'
              : 'bg-gray-100 text-gray-600'
          }`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
