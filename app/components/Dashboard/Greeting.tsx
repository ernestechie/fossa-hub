import React from 'react';

export default function Greeting() {
  return (
    <div className='flex items-center justify-between mb-8'>
      <div>
        <p className='text-3xl font-bold mb-2'>Good morning, Ernest ⛅</p>
        <p className=''>Check out your dashboard summary</p>
      </div>
      <button className='text-orange-600 font-medium'>View analytics</button>
    </div>
  );
}
