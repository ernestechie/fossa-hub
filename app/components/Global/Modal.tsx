import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Modal = (props: {
  children: React.ReactNode;
  heading: string;
  open: boolean;
  closeModal: () => void;
}) => {
  const { heading, children, open, closeModal } = props;

  return (
    <>
      {open && (
        <div className='p-4 z-50 fixed top-0 left-0 h-full w-full backdrop-blur-sm bg-[rgba(0,0,0,0.5)] flex items-center justify-center duration-500'>
          <div className='py-4 w-full max-w-lg rounded-md bg-white shadow-xl duration-500'>
            <div className='p-4 px-6 mb-4 border-b border-b-gray-100 flex items-center justify-between'>
              <p className='text-lg capitalize font-bold'>{heading}</p>
              <button
                type='button'
                title='Close Modal Button'
                onClick={closeModal}
              >
                <AiOutlineCloseCircle className='text-xl' />
              </button>
            </div>
            <div className='p-4 px-6'>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
