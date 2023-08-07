import Button from '@/app/components/Button';
import { parseNigerianNaira } from '@/helpers/parseCurrency';
import { parseDate } from '@/helpers/parseDate';
import { getEventById } from '@/libs/events';
import React from 'react';
import { IoCalendarSharp } from 'react-icons/io5';
import { MdLocationPin } from 'react-icons/md';

const EventDetailsPage = ({ params }: { params: { eventId: string } }) => {
  const currentId = params.eventId;

  const currentEvent = getEventById(currentId);

  return (
    <>
      {currentEvent && (
        <section>
          <section className='grid grid-cols-5 gap-4 mb-12'>
            <div className='bg-white shadow-sm rounded-xl p-6 w-full border-[1px] border-gray-100 col-span-5 lg:col-span-2 xl:col-span-2 min-h-96'>
              <p className='py-2 text-xl font-semibold capitalize text-gray-800'>
                {currentEvent.title}
              </p>
              <p className='mb-4 pb-4 capitalize text-gray-500 border-b-[1px] border-b-gray-100 flex items-center gap-1'>
                <MdLocationPin />
                <span>
                  {currentEvent.location.venue_name},{' '}
                  {currentEvent.location.address}, {currentEvent.location.city}.
                </span>
              </p>

              <div className='pb-4 border-b-[1px] border-b-gray-100 flex gap-16'>
                <div>
                  <p className='text-gray-500 mb-2'>Starting Price:</p>
                  <p className='text-orange-700 font-bold text-3xl'>
                    {parseNigerianNaira(currentEvent.ticket_price)}
                  </p>
                </div>
                <div>
                  <p className='text-gray-500 mb-2'>Tickets Sold:</p>
                  <p className='text-yellow-700 font-bold text-3xl'>
                    {(
                      Math.floor(currentEvent.ticket_price / 30) *
                      currentEvent.tickets_sold.length
                    ).toLocaleString()}
                  </p>
                </div>
              </div>

              <div>
                <p className='text-gray-500 mt-4'>Starting:</p>

                <div className='flex items-center justify-between my-2 p-4 rounded-lg border-[1px] border-gray-200'>
                  <div className='flex items-center gap-2 text-gray-700'>
                    <IoCalendarSharp />
                    <p className='text-sm font-medium'>
                      {parseDate(currentEvent.start_date)}
                    </p>
                  </div>
                  <Button slug={params.eventId} />
                </div>
              </div>
            </div>
            <div
              className='w-full h-96 rounded-xl col-span-5 lg:col-span-3 xl:col-span-3'
              style={{
                background: `url(${currentEvent.image_url}) center center/cover`,
              }}
            />
          </section>

          <div>
            <p className='text-2xl font-bold text-gray-700 py-4'>ABOUT EVENT</p>
            <p className='text-lg text-gray-600'>{currentEvent.overview}</p>
          </div>

          <div className='mt-8'>
            <p className='text-lg font-bold text-gray-700 py-4'>Created By:</p>
            <div className='flex items-center gap-4 p-2 bg-orange-50 rounded-lg'>
              <div className='h-12 w-12 bg-orange-900 rounded-full flex items-center justify-center'>
                <span className='text-xl font-bold text-white capitalize'>
                  {currentEvent.posted_by.name.split(' ')[0][0]}
                  {currentEvent.posted_by.name.split(' ')[1][0]}
                </span>
              </div>
              <div>
                <p className='leading-3 text-lg font-bold text-gray-800'>
                  {currentEvent.posted_by.name}
                </p>
                <p className='text-gray-500 capitalize'>
                  {currentEvent.posted_by.role}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default EventDetailsPage;
