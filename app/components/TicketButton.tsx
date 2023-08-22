'use client';
import { useRouter } from 'next/navigation';
import { PiPlusCircle } from "react-icons/pi";
const TicketButton = () => {
  const router = useRouter();
  function handleClick() {
    router.push('/dashboard/events/newticket');
  }

  return (
    <button 
    onClick={()=>handleClick()}
     className="flex justify-center m-1 h-8 w-28 space-x-1 items-center font-semibold text-white rounded-md bg-orange-600">
      <PiPlusCircle  className="h-4 w-4"/>
      <p>Add Ticket</p> 
    </button>
  );
};

export default TicketButton;
