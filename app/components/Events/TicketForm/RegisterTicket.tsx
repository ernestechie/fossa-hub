'use client';
import { ITicketTier } from '@/models/tickets';
import { useState } from 'react';
import { PiPlusCircle } from 'react-icons/pi';
import Modal from '../../Global/Modal';

const RegisterTicket = (props: { tiers: ITicketTier[] | undefined }) => {
  const { tiers } = props;

  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = () => setIsOpen(true);
  const handleModalClose = () => setIsOpen(false);

  return (
    <>
      <Modal
        heading='Register a new ticket'
        open={isOpen}
        closeModal={handleModalClose}
      >
        <form>
          <div className='mb-4'>
            <label
              htmlFor='ticket_number'
              className='block text-gray-700 font-bold mb-2 text-lg'
            >
              Ticket Number
            </label>
            <input
              type='text'
              id='ticket_number'
              name='ticket_number'
              value={''}
              onChange={() => {}}
              className='form-input'
              placeholder='Ticket Number'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='eventType'
              className='block text-gray-700 font-bold mb-2 text-lg'
            >
              Type of Event
            </label>
            <select
              id='eventType'
              name='eventType'
              value={''}
              onChange={() => {}}
              className='form-input'
              required
            >
              <option value='' disabled>
                Select ticket tier
              </option>

              {tiers?.map((tier) => (
                <option key={tier._id} value={tier.name} className='capitalize'>
                  {tier.name}
                </option>
              ))}
            </select>
          </div>
          <button
            type='submit'
            className='bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-4 rounded-md focus:outline-none block w-full'
          >
            Register Ticket
          </button>
        </form>
      </Modal>
      <button
        type='button'
        onClick={() => handleModalOpen()}
        className='flex justify-center items-center my-4 space-x-1 font-semibold text-white rounded-md bg-gray-700 hover:bg-gray-800 duration-500 py-3 px-8'
      >
        <PiPlusCircle className='h-4 w-4' />
        <span>Register Ticket</span>
      </button>
    </>
  );
};

export default RegisterTicket;
