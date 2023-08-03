import { parseNigerianNaira } from '@/helpers/parseCurrency';
import { parseDateDay, parseDateMonth } from '@/helpers/parseDate';
import { IEvent } from '@/models/events';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ComponentProps {
  event: IEvent;
}

const EventCard: React.FC<ComponentProps> = ({ event }) => {
  return (
    <div className='relative w-full max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden max-h-[512px]'>
      <span className='absolute top-4 left-4 bg-orange-700 py-1 px-6 rounded-full text-white font-semibold capitalize text-sm'>
        {event.categories[0]}
      </span>
      <Link href={`/dashboard/events/${event._id}`}>
        <Image
          className='w-full h-44'
          src={event.image_url}
          alt={event.description}
          width={300}
          height={300}
        />
      </Link>
      <div className='h-full'>
        <div className='grid grid-cols-3 items-center border-b-[1px] border-b-gray-100'>
          <div className='p-4 col-span-1 flex flex-col items-center justify-center'>
            <p className='uppercase text-gray-500'>
              {parseDateMonth(event.start_date)}
            </p>
            <p className='text-4xl text-gray-800'>
              {parseDateDay(event.start_date)}
            </p>
          </div>
          <div className='p-4 col-span-2 border-l-[1px] border-l-gray-100'>
            <p className='uppercase font-semibold mb-2 text-gray-800'>
              {event.title}
            </p>
          </div>
        </div>
        <div className='grid grid-cols-3'>
          <div className='p-4 col-span-1'>
            <p className='text-sm mb-1 text-gray-600'>Starting:</p>
            <p className='font-bold text-2xl text-orange-700 md:text-xl lg:text-2xl'>
              {parseNigerianNaira(event.ticket_price)}
            </p>
          </div>
          <div className='p-4 col-span-2'>
            <p className='text-sm mb-1 text-gray-600'>Venue:</p>
            <p className='font-semibold sm:text-sm text-gray-700 md:text-base capitalize'>
              {event.location.venue_name}, {event.location.address}.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
