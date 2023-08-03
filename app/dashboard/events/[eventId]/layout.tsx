import EventDetailsNav from '@/app/components/Events/EventDetails/Navigation';
import { getEventById } from '@/libs/events';
import React from 'react';

const layout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { eventId: string };
}) => {
  const currentId = params.eventId;

  const thisEvent = getEventById(currentId);

  if (!thisEvent) {
    return (
      <p className='pt-32 text-6xl text-gray-600 text-center'>
        Event not found
      </p>
    );
  }

  return (
    <section className='p-4 sm:p-8 md:px-16'>
      <EventDetailsNav slug={params.eventId} />
      {thisEvent && <section className='pt-12'>{children}</section>}
    </section>
  );
};

export default layout;
