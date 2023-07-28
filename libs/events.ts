import { IEvent } from '@/models/events';
import { events } from '@/schema';

export const getEventById = (id: string) => {
  const thisEvent = events.find((event: IEvent) => event._id === id);

  return thisEvent;
};
