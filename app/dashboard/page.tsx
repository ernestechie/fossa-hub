import LineGraph from '../components/Dashboard/Chart/LineGraph';
import Greeting from '../components/Dashboard/Greeting';

export default function Dashboard() {
  return (
    <div className='p-4 sm:p-8 md:p-16'>
      <Greeting />
      <div className='grid grid-cols-4 gap-4'>
        {[1, 2, 3, 4].map((el: number) => (
          <div
            key={el}
            className={`col-span-4 sm:col-span-2 lg:col-span-1 p-6 rounded-md border-[1px] border-gray-200 h-36 ${
              el === 1 ? 'bg-green-600' : 'bg-white'
            }`}
          ></div>
        ))}
      </div>
      <LineGraph />
    </div>
  );
}
