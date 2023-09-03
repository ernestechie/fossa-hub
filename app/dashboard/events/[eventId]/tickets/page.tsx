import PopupMenu from '@/app/components/Events/PopupMenu/PopUp';
import RegisterTicket from '@/app/components/Events/TicketForm/RegisterTicket';
import TicketForm from '@/app/components/Events/TicketForm/TicketForm';
import { parseDate } from '@/helpers/parseDate';
import { getEventById } from '@/libs/events';
import { IEvent } from '@/models/events';
import { ITicket } from '@/models/tickets';
import React from 'react';

const data = [
  {
    _id: '1',
    number: 3,
    tier: 'Regular',
    price: 5000,
    buyer_name: 'Lucky George',
    purchase_date: new Date('07-22-23'),
    verification_status: false,
  },
  {
    _id: '2',
    number: 7,
    tier: 'VVIP',
    price: 12000,
    buyer_name: 'Isaiah Ernest',
    purchase_date: new Date('08-20-23'),
    verification_status: true,
  },
];

const columns = [
  { label: 'ID', key: '_id' },
  { label: 'Number', key: 'number' },
  { label: 'Tier', key: 'tier' },
  { label: 'Buyer', key: 'buyer_name' },
  { label: 'Purchased', key: 'purchase_date' },
  { label: 'Status', key: 'verification_status' },
];

interface ColumnType {
  key: string;
  label: string;
}

const EventTickets = ({ params }: { params: { eventId: string } }) => {
  const currentId = params.eventId;
  const currentEvent: IEvent | undefined = getEventById(currentId);

  return (
    <>
      <TicketForm />
      <RegisterTicket tiers={currentEvent?.ticket_tiers} />
      <div className='flex flex-col mt-8 container mx-auto'>
        <div className='rounded-xl'>
          <table className='table w-full border-collapse'>
            <thead>
              <tr className='bg-gray-50'>
                {columns.map((column) => (
                  <th
                    key={column.key}
                    className='text-left text-gray-700 p-4 font-bold border border-gray-100 uppercase text-sm'
                  >
                    {column.label}
                  </th>
                ))}
                <td className='text-center border border-gray-100 text-gray-200'>
                  ||
                </td>
              </tr>
            </thead>
            <tbody>
              {data.map((row: ITicket) => (
                <tr
                  key={row._id}
                  className='text-[15px] hover:bg-gray-50 text-gray-800 border border-b-gray-100 font-medium'
                >
                  <td className='p-4'>{row._id}</td>
                  <td className='p-4'>{row.number}</td>
                  <td className='p-4'>{row.tier}</td>
                  <td className='p-4'>{row.buyer_name}</td>
                  <td className='p-4'>{parseDate(row.purchase_date)}</td>
                  <td className='p-4'>
                    {row.verification_status ? (
                      <span className='px-6 py-2 bg-green-100 text-green-700 font-medium rounded-full'>
                        Verified
                      </span>
                    ) : (
                      <span className='px-6 py-2 bg-orange-100 text-orange-600 font-medium rounded-full'>
                        Unverified
                      </span>
                    )}
                  </td>
                  <td className='py-2 px-4 text-gray-700 cursor-pointer'>
                    <PopupMenu verified={row.verification_status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default EventTickets;
