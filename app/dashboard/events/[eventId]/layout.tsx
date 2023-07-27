import EventDetailsNav from '@/app/components/Events/EventDetails/Navigation';
import { IEvent } from '@/models/events';
import { events } from '@/schema';
import React from 'react';

const layout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { eventId: string };
}) => {
  const currentId = params.eventId;

  const thisEvent = events.find((event: IEvent) => event._id === currentId);

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
      <section className='pt-12'>{children}</section>
    </section>
  );
};

export default layout;
