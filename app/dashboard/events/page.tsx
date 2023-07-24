import EventCard from '@/app/components/Events/EventCard';
import { BsPlus } from 'react-icons/bs';
import { event } from '../../../schema';

export default function Events() {
  return (
    <section className='p-4 sm:p-8 md:p-16'>
      <div className='mb-16 flex items-center justify-between'>
        <p className='font-bold text-gray-800 text-3xl capitalize'>2023</p>
        <button
          type='button'
          className='btn bg-green-600 text-gray-50 hover:bg-green-700'
        >
          <BsPlus className='text-xl' />
          <span>Create Event</span>
        </button>
      </div>
      <section className='grid gap-4 gap-y-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {[1, 2, 3].map((el) => (
          <EventCard key={el} event={event} />
        ))}
      </section>
    </section>
  );
}
