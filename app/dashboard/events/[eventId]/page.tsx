import { parseNigerianNaira } from '@/helpers/parseCurrency';
import { parseDate } from '@/helpers/parseDate';
import { getEventById } from '@/libs/events';
import React from 'react';
import { IoCalendarSharp } from 'react-icons/io5';

const EventDetailsPage = ({ params }: { params: { eventId: string } }) => {
  const currentId = params.eventId;

  const currentEvent = getEventById(currentId);

  return (
    <>
      {currentEvent && (
        <section className='grid grid-cols-5 gap-4'>
          <div
            className='w-full h-96 rounded-xl col-span-5 lg:col-span-3 xl:col-span-3'
            style={{
              background: `url(${currentEvent.image_url}) center center/cover`,
            }}
          />
          <div className='bg-white shadow-sm rounded-xl p-6 w-full border-[1px] border-gray-100 col-span-5 lg:col-span-2 xl:col-span-2 min-h-96'>
            <p className='py-2 text-xl font-semibold capitalize text-gray-800'>
              {currentEvent.title}
            </p>
            <p className='mb-4 pb-4 capitalize text-gray-600 border-b-[1px] border-b-gray-100'>
              - {currentEvent.location.venue_name},{' '}
              {currentEvent.location.address}, {currentEvent.location.city}.
            </p>

            <div className='pb-4 border-b-[1px] border-b-gray-100 flex gap-16'>
              <div>
                <p className='text-gray-500 mb-2'>Starting Price</p>
                <p className='text-orange-700 font-bold text-3xl'>
                  {parseNigerianNaira(currentEvent.ticket_price)}
                </p>
              </div>
              <div>
                <p className='text-gray-500 mb-2'>Tickets Sold</p>
                <p className='text-yellow-700 font-bold text-3xl'>
                  {currentEvent.tickets_sold.length.toLocaleString()}
                </p>
              </div>
            </div>

            <div className='flex items-center justify-between my-4 p-4 rounded-lg border-[1px] border-gray-200'>
              <div className='flex items-center gap-2 text-gray-700'>
                <IoCalendarSharp />
                <p className='text-sm font-medium'>
                  {parseDate(currentEvent.start_date)}
                </p>
              </div>

              <button type='button' className='font-semibold text-orange-600'>
                Change
              </button>
            </div>

            {/* <button type='button' className='p-4 block w-full'>
              Edit
            </button> */}
          </div>
        </section>
      )}
    </>
  );
};

export default EventDetailsPage;
