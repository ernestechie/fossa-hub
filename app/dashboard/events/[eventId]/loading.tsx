import React from 'react';

const Loading = () => {
  return (
    <div className='grid grid-cols-5 gap-4'>
      <div
        className='animate-pulse bg-gray-50 w-full h-96 rounded-xl col-span-5 lg:col-span-3 xl:col-span-3'
        style={{
          animationDelay: '1s',
          animationDuration: '1.5s',
        }}
      />
      <div
        className='animate-pulse bg-gray-50 rounded-xl p-6 w-full col-span-5 lg:col-span-2 xl:col-span-2 min-h-96'
        style={{
          animationDelay: '1.5s',
          animationDuration: '1s',
        }}
      />
    </div>
  );
};

export default Loading;
