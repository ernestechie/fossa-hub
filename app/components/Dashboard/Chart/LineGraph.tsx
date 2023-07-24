import React from 'react';
import { MdInfoOutline } from 'react-icons/md';

const LineGraph = () => {
  return (
    <div className='w-full my-12 py-8 px-6 border-[1px] border-gray-100 rounded-lg'>
      <div className='flex items-start justify-between'>
        <div>
          <p className='text-xl font-bold mb-2'>Avareage Page Views </p>
          <p className='capitalize'>{'Weekly'}</p>
        </div>
        <button type='button' className='text-_gray_'>
          {''}
          <MdInfoOutline className='w-5 h-5' />
        </button>
      </div>
      <p className='my-8 text-4xl font-bold'>{112}</p>
    </div>
  );
};

export default LineGraph;
