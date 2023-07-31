import { getEventById } from '@/libs/events';
import React from 'react';

const EventTickets = ({ params }: { params: { eventId: string } }) => {
  const currentId = params.eventId;

  const currentEvent = getEventById(currentId);

  return (
    <div>
      <p>Tickets</p>
    </div>
  );
};

export default EventTickets;
