'use client';
import React, { useState } from 'react';
import Navbar from '../components/Dashboard/Navbar';
import Sidebar from '../components/Dashboard/Sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

  const setOpen = () => setSidebarOpen(true);
  const setClose = () => setSidebarOpen(false);

  return (
    <div className='grid grid-cols-12 bg-gray-50'>
      <div
        className={`bg-white duration-500 transition-all border-r-[1px] border-r-gray-50  ${
          sidebarOpen
            ? 'hidden md:block md:col-span-3 lg:col-span-2'
            : 'hidden md:block md:col-span-1'
        } `}
      >
        <Sidebar isOpen={sidebarOpen} setOpen={setOpen} setClose={setClose} />
      </div>
      <div
        className={`duration-500 bg-white col-span-12 py-24 ${
          sidebarOpen ? 'md:col-span-9 lg:col-span-10' : 'md:col-span-11'
        }`}
      >
        <Navbar isOpen={sidebarOpen} />

        {children}
      </div>
    </div>
  );
}
