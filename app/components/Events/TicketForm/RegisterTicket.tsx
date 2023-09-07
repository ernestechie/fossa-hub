'use client';
import { ITicketTier } from '@/models/tickets';
import { events } from '@/schema';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { PiPlusCircle } from 'react-icons/pi';
import Modal from '../../Global/Modal';

interface INewTicket {
  number: number | string;
  tier: string;
  buyer_name: string;
}

const RegisterTicket = (props: { tiers: ITicketTier[] | undefined }) => {
  const { tiers } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [newTicket, setNewTicket] = useState<INewTicket>({
    number: '',
    tier: '',
    buyer_name: '',
  });

  const { tier, number, buyer_name } = newTicket;

  const handleModalOpen = () => setIsOpen(true);
  const handleModalClose = () => setIsOpen(false);

  const registerNewTicketHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTicketTierPrice = tiers?.find(
      (thisTier) => thisTier.name.toLowerCase() === tier.toLowerCase()
    );

    if (newTicketTierPrice) {
      const ticket_to_add = {
        ...newTicket,
        price: newTicketTierPrice['price'],
        purchase_date: new Date(),
        verification_status: false,
      };

      console.log(ticket_to_add);

      toast.success('New ticket successfully registered.');
    } else {
      toast.error('Ticket tier does not exist');
    }
  };

  const formInputHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setNewTicket((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <>
      <Modal
        heading='Register a new ticket'
        open={isOpen}
        closeModal={handleModalClose}
      >
        <form onSubmit={registerNewTicketHandler}>
          <div className='mb-4'>
            <label
              htmlFor='ticket_number'
              className='block text-gray-700 font-bold mb-2 text-lg'
            >
              Buyer Name
            </label>
            <input
              type='text'
              id='buyer_name'
              name='buyer_name'
              value={buyer_name}
              onChange={formInputHandler}
              className='form-input'
              placeholder='Buyer Name'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='ticket_number'
              className='block text-gray-700 font-bold mb-2 text-lg'
            >
              Ticket Number
            </label>
            <input
              type='text'
              id='number'
              name='number'
              value={number}
              onChange={formInputHandler}
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
              Ticket Tier
            </label>
            <select
              title='Ticket Tier'
              id='tier'
              name='tier'
              value={tier}
              onChange={formInputHandler}
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
