"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { ITicket } from "@/models/tickets";
import { parseDate } from "@/helpers/parseDate";

const TicketForm = () => {
  const [formData, setFormData] = useState<ITicket>({
    _id: "",
    number: 0,
    tier: "",
    price: 0,
    buyer_name: "",
    purchase_date: new Date(),
    verification_status: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">
          Purchase Information Form
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">ID:</label>
            <input
              type="text"
              name="_id"
              value={formData._id}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Number:</label>
            <input
              type="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Tier:</label>
            <input
              type="text"
              name="tier"
              value={formData.tier}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Price:</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Buyer Name:</label>
            <input
              type="text"
              name="buyer_name"
              value={formData.buyer_name}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Purchase Date:</label>
            <input
              type="date"
              name="purchase_date"
              value={parseDate(formData.purchase_date)}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TicketForm;
