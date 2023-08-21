"use client"
import { ChangeEvent, FormEvent, useState } from "react";

const NewTicketForm = () => {
  const [ticketData, setTicketData] = useState({
    number: "",
    tier: "",
    price: 0,
    buyer_name:""
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setTicketData({ ...ticketData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(ticketData);
  };
  return (
    <>
    <form className='my-8 w-full max-w-lg mx-auto' onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
          Ticket number
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={ticketData.number}
          onChange={handleChange}
          className=" appearance-none border rounded-md w-full p-3 text-gray-700 leading-tight focus:outline-none"
          placeholder="Ticket number"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
          Ticket tier
        </label>
        <input
          type="text"
          id="price"
          name="price"
          value={ticketData.tier}
          onChange={handleChange}
          className=" appearance-none border rounded-md w-full p-3 text-gray-700 leading-tight focus:outline-none"
          placeholder="Ticket tier "
        />
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
          Ticket tier price
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={ticketData.price}
          onChange={handleChange}
          className=" appearance-none border rounded-md w-full p-3 text-gray-700 leading-tight focus:outline-none"
          placeholder="Ticket tier price"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
          buyer name
        </label>
        <input
          type="text"
          id="price"
          name="price"
          value={ticketData.buyer_name}
          onChange={handleChange}
          className=" appearance-none border rounded-md w-full p-3 text-gray-700 leading-tight focus:outline-none"
          placeholder="Ticket Price"
        />
      </div>
      <div className='flex items-center justify-center'>
        <button
          type='submit'
          className='bg-orange-700 hover:bg-orange-800 text-white font-bold py-3 px-4 rounded-md focus:outline-none block w-full duration-500'
        >
          Create Ticket
        </button>
      </div>
      </form>
    </>
  );
};

export default NewTicketForm;