import EventCard from '@/app/components/Events/EventCard';
import Navigation from '@/app/components/Events/Navigation';
import { IEvent } from '@/models/events';
import { events } from '../../../schema';

export default function Events() {
  return (
    <section className='p-4 sm:p-8 md:p-16'>
      <Navigation />
      <section className='grid gap-4 gap-y-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {events.map((event: IEvent) => (
          <EventCard key={event._id} event={event} />
        ))}
      </section>
    </section>
  );
}
