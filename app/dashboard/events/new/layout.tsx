import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='mx-auto max-w-[768px] p-4 sm:p-8 py-16 md:px-16'>
      {children}
    </section>
  );
};

export default layout;
