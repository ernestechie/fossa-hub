import { ITicketTier } from '@/models/tickets';
import React from 'react';
import { AiFillDelete } from 'react-icons/ai';

const TicketTier = (props: {
  tier: ITicketTier;
  onDelete: (id: string) => void;
  onEdit: (id: string, key: string, value: string | number) => void;
}) => {
  const { _id, available_qty, description, name, price } = props.tier;

  return (
    <>
      <div className='mt-8 mb-2 grid grid-cols-6 gap-4 text-sm font-semibold text-gray-700'>
        <p className='col-span-3'>Name</p>
        <p className='col-span-2'>Price</p>
        <p className='col-span-1'>Qty</p>
      </div>
      <div className='my-4 border-b border-gray-100 pb-4 grid grid-cols-6 gap-4'>
        <input
          type='text'
          id={name}
          name={name}
          value={name}
          placeholder='Tier Name'
          className='form-input capitalize col-span-3'
          onChange={(e) => props.onEdit(_id, 'name', e.target.value)}
        />

        <input
          type='number'
          id={price.toString()}
          name={price.toString()}
          value={price}
          placeholder='Tier Price'
          className='form-input capitalize col-span-2'
          onChange={(e) => props.onEdit(_id, 'price', e.target.value)}
        />

        <input
          type='number'
          id={available_qty.toString()}
          name={available_qty.toString()}
          value={available_qty}
          placeholder='Qty'
          className='form-input capitalize col-span-1'
          onChange={(e) => props.onEdit(_id, 'available_qty', e.target.value)}
        />

        <div className='col-span-6'>
          <p className='text-sm mb-2 font-semibold text-gray-700'>
            Description
          </p>

          <div className='flex gap-4 items-center'>
            <input
              type='text'
              id={description}
              name={description}
              value={description}
              placeholder='Description (What you offer)'
              className='form-input capitalize w-full'
              onChange={(e) => props.onEdit(_id, 'description', e.target.value)}
            />

            <button
              type='button'
              title='Delete ticket tier'
              className='col-span-1 text-red-600 flex items-center justify-center'
              onClick={() => props.onDelete(_id)}
            >
              <AiFillDelete className='text-lg' />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketTier;
