'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

const GoBack = () => {
  const { back } = useRouter();

  return (
    <div className='my-4'>
      <button
        type='button'
        title='Go Back'
        className='flex items-center gap-2'
        onClick={() => back()}
      >
        <MdOutlineArrowBackIosNew />
        <span className='font-bold'>Go back</span>
      </button>
    </div>
  );
};

export default GoBack;
