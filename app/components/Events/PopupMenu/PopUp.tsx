'use client';
import { AiFillCheckCircle, AiFillDelete } from 'react-icons/ai';
import { SlOptionsVertical } from 'react-icons/sl';
import { Popup } from 'reactjs-popup';

const PopupMenu = (props: { verified: boolean }) => {
  const { verified } = props;

  return (
    <Popup
      trigger={
        <button type='button' title='Ticket options'>
          <SlOptionsVertical />
        </button>
      }
      position='right top'
      on='click'
      closeOnDocumentClick
      mouseLeaveDelay={300}
      mouseEnterDelay={0}
      contentStyle={{ padding: '0px', border: 'none' }}
      arrow={false}
    >
      <div className='w-[120px] bg-white text-gray-600 rounded-md relative right-[50px] top-4 justify-center items-start border-gray-100 shadow-sm border border-gray-100'>
        {!verified && (
          <button className='w-full flex items-center border-b border-gray-100 px-4 py-2 gap-4'>
            <AiFillCheckCircle />
            <span className='text-base'>Validate</span>
          </button>
        )}
        <button className='w-full flex items-center px-4 py-2 gap-4'>
          <AiFillDelete />
          <span className='text-base'>Delete</span>
        </button>
      </div>
    </Popup>
  );
};

export default PopupMenu;
