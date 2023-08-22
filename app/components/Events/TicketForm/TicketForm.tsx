"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import TicketPopup from "../PopupMenu/PopupTicket";

const TicketForm = () => {
  const [formData, setFormData] = useState({
    number: "",
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
      <div className="p-6 border border-gray-100 rounded-lg">
        <p className="text-xl font-semibold mb-8">Verify Ticket</p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div className="w-full">
            <label className="block mb-2 font-bold">Ticket Number:</label>
            <input
              title="Ticket Number"
              type="text"
              name="number"
              value={formData.number}
              onChange={handleChange}
              className="w-full p-3 border rounded-md outline-none"
              required
              placeholder="Ticket Number"
            />
          </div>
          <TicketPopup />
        </form>
      </div>
    </div>
  );
};

export default TicketForm;
