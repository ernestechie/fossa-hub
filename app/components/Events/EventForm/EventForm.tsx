"use client";
import React, { useState } from "react";
import { parseDate } from "@/helpers/parseDate";

const EventFormComponent: React.FC = () => {
  const [formData, setFormData] = useState({
    image_url: "",
    title: "",
    description: "",
    ticket_price: 0,
    categories: [],
    location: {
      venue_name: "",
      address: "",
      city: "",
      state: "",
      country: "",
      postal_code: "",
    },
    start_date: new Date(""),
    end_date: new Date(""),
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  // Event type is gotten from the "categories" property of the event object
  // Event type is dynamic, and should be a list of different categories
  // Check line 20 & 21 in schema.js in the root directory
  const categorieType: string[] = [
    "Conference",
    "Seminar",
    "Workshop",
    "Trade Show",
    "Concert",
    "Festival",
    "Exhibition",
    "Other",
  ];

  return (
    <form className="my-8 w-full max-w-lg mx-auto" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="eventType"
          className="block text-gray-700 font-bold mb-2"
        >
          Type of Event
        </label>
        <select
          id="eventType"
          name="eventType"
          value={formData.categories}
          onChange={handleChange}
          className=" appearance-none border rounded-md w-full p-3 text-gray-700 leading-tight focus:outline-none"
        >
          <option value="" disabled>
            Select event type
          </option>
          {categorieType.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
          Event Image
        </label>
        <input
          type="file"
          id="image"
          name="image"
          value={formData.image_url}
          onChange={handleChange}
          className="appearance-none border rounded-md w-full p-3 text-gray-700 leading-tight focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
          Event Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className=" appearance-none border rounded-md w-full p-3 text-gray-700 leading-tight focus:outline-none"
          placeholder="Event Title"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-gray-700 font-bold mb-2"
        >
          Event Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className=" appearance-none border rounded-md w-full p-3 text-gray-700 leading-tight focus:outline-none  h-32 resize-none"
          placeholder="Event Description"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
          Ticket Price
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.ticket_price}
          onChange={handleChange}
          className=" appearance-none border rounded-md w-full p-3 text-gray-700 leading-tight focus:outline-none"
          placeholder="Ticket Price"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="venue_name"
          className="block text-gray-700 font-bold mb-2"
        >
          Venue Name
        </label>
        <input
          type="text"
          id="venue_name"
          name="venue_name"
          value={formData.location.venue_name}
          onChange={handleChange}
          className=" appearance-none border rounded-md w-full p-3 text-gray-700 leading-tight focus:outline-none"
          placeholder="Venue Name"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="venue_name"
          className="block text-gray-700 font-bold mb-2"
        >
          Venue Name
        </label>
        <input
          type="date"
          id="start_date"
          name="start_date"
          value={parseDate(formData.start_date)}
          onChange={handleChange}
          className=" appearance-none border rounded-md w-full p-3 text-gray-700 leading-tight focus:outline-none"
          placeholder="Venue Name"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="venue_name"
          className="block text-gray-700 font-bold mb-2"
        >
          Venue Name
        </label>
        <input
          type="date"
          id="end_date"
          name="end_date"
          value={parseDate(formData.end_date)}
          onChange={handleChange}
          className=" appearance-none border rounded-md w-full p-3 text-gray-700 leading-tight focus:outline-none"
          placeholder="Venue Name"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
          Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.location.address}
          onChange={handleChange}
          className=" appearance-none border rounded-md w-full p-3 text-gray-700 leading-tight focus:outline-none"
          placeholder="Address"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="city" className="block text-gray-700 font-bold mb-2">
          City
        </label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.location.city}
          onChange={handleChange}
          className=" appearance-none border rounded-md w-full p-3 text-gray-700 leading-tight focus:outline-none"
          placeholder="City"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="state" className="block text-gray-700 font-bold mb-2">
          State
        </label>
        <input
          type="text"
          id="state"
          name="state"
          value={formData.location.state}
          onChange={handleChange}
          className=" appearance-none border rounded-md w-full p-3 text-gray-700 leading-tight focus:outline-none"
          placeholder="State"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="country" className="block text-gray-700 font-bold mb-2">
          Country
        </label>
        <input
          type="text"
          id="country"
          name="country"
          value={formData.location.country}
          onChange={handleChange}
          className=" appearance-none border rounded-md w-full p-3 text-gray-700 leading-tight focus:outline-none"
          placeholder="Country"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="postal_code"
          className="block text-gray-700 font-bold mb-2"
        >
          Postal Code
        </label>
        <input
          type="text"
          id="postal_code"
          name="postal_code"
          value={formData.location.postal_code}
          onChange={handleChange}
          className=" appearance-none border rounded-md w-full p-3 text-gray-700 leading-tight focus:outline-none"
          placeholder="Postal Code"
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-orange-700 hover:bg-orange-800 text-white font-bold py-3 px-4 rounded-md focus:outline-none block w-full duration-500"
        >
          Create Event
        </button>
      </div>
    </form>
  );
};

export default EventFormComponent;
