import { parseDate } from '@/helpers/parseDate';
import { getEventById } from '@/libs/events';
import { ITicket } from '@/models/tickets';
import React from 'react';

const data = [
  {
    _id: '1',
    number: 30,
    tier: 'Regular',
    price: 5000,
    buyer_name: 'Lucky George',
    purchase_date: new Date('10-20-23'),
    verification_status: false,
  },
];

const columns = [
  { label: 'Ticket ID', key: '_id' },
  { label: 'Order NO', key: 'number' },
  { label: 'Ticket Tier', key: 'tier' },
  { label: 'Buyer Name', key: 'buyer_name' },
  { label: 'Purchase Date', key: 'purchase_date' },
  { label: 'Status', key: 'verification_status' },
];

interface ColumnType {
  key: string;
  label: string;
}

const EventTickets = ({ params }: { params: { eventId: string } }) => {
  const currentId = params.eventId;

  const currentEvent = getEventById(currentId);

  return (
    <div className='container mx-auto p-4'>
      <table className='table w-full border-collapse border border-gray-300'>
        <thead>
          <tr className='bg-gray-100'>
            {columns.map((column) => (
              <th
                key={column.key}
                className='py-2 px-4 border border-gray-300 text-left font-semibold'
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row: ITicket) => (
            <tr key={row._id} className='hover:bg-gray-50'>
              <td className='py-2 px-4 border border-gray-300'>{row._id}</td>
              <td className='py-2 px-4 border border-gray-300'>{row.number}</td>
              <td className='py-2 px-4 border border-gray-300'>{row.tier}</td>
              <td className='py-2 px-4 border border-gray-300'>
                {row.buyer_name}
              </td>
              <td className='py-2 px-4 border border-gray-300'>
                {parseDate(row.purchase_date)}
              </td>
              <td className='py-2 px-4 border border-gray-300'>
                {row.verification_status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventTickets;
