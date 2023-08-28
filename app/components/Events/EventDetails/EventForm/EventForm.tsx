'use client';
import Modal from '@/app/components/Global/Modal';
import { parseNigerianNaira } from '@/helpers/parseCurrency';
import { parseDate } from '@/helpers/parseDate';
import React, { useState } from 'react';
import { AiFillDelete, AiOutlinePlus } from 'react-icons/ai';

interface ITicketTier {
  _id: string | number;
  name: string;
  price: number;
  description: string;
  available_qty: number;
}

const EventFormComponent: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    overview: '',
    image_url: '',
    start_date: new Date(''),
    end_date: new Date(''),
    location: {
      venue_name: '',
      address: '',
      city: '',
      state: '',
      country: '',
      postal_code: '',
    },
    categories: [],
    tags: [],
    capacity: 100,
    is_free: false,
    ticket_price: 2000,
    registration_required: true,
    registration_deadline: new Date(''),
    ticket_tiers: [],
    attachments: [],
  });

  const [ticketTiers, setTicketTiers] = useState<ITicketTier[]>([
    {
      _id: 1,
      name: 'Regular',
      price: 3500,
      description: 'Standard admission ticket',
      available_qty: 50,
    },
    {
      _id: 2,
      name: 'VIP',
      price: 10000,
      description: 'VIP ticket with additional perks',
      available_qty: 30,
    },
  ]);

  const [tierFormData, setTierFormData] = useState({
    tier_name: '',
    tier_price: '',
    tier_description: '',
    available_quantity: '',
  });

  const handleTierFormChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setTierFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const posted_by = {
      _id: 'ernestechie',
      name: 'ernestechie',
      role: 'super admin',
    };

    const data = { ...formData, posted_by };

    e.preventDefault();
    // console.log(data);
  };

  // Event type is gotten from the "categories" property of the event object
  // Event type is dynamic, and should be a list of different categories
  // Check line 20 & 21 in schema.js in the root directory
  const categorieType: string[] = [
    'Conference',
    'Seminar',
    'Workshop',
    'Trade Show',
    'Concert',
    'Festival',
    'Exhibition',
    'Other',
  ];

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const createNewTicketTier = (
    name: string,
    desc: string,
    price: number,
    qty: number
  ) => {
    const new_tier = {
      _id: ticketTiers.length + 1,
      name,
      price,
      description: desc,
      available_qty: qty,
    };

    setTicketTiers([...ticketTiers, new_tier]);

    setTierFormData({
      tier_name: '',
      tier_price: '',
      tier_description: '',
      available_quantity: '',
    });
  };

  const handleDeleteTicketTier = (_id: string | number) => {
    const updated_tiers = ticketTiers.filter(
      (el: ITicketTier) => el._id !== _id
    );

    setTicketTiers(updated_tiers);
  };

  return (
    <>
      <Modal
        heading='Add new ticket tier'
        open={modalOpen}
        closeModal={handleModalClose}
      >
        <div className='grid grid-cols-2 gap-4'>
          <div className='mb-4 col-span-1'>
            <label
              htmlFor='tier_name'
              className='block text-gray-700 font-bold mb-2 text-lg'
            >
              Name
            </label>
            <input
              type='text'
              id='tier_name'
              name='tier_name'
              value={tierFormData.tier_name}
              onChange={handleTierFormChange}
              className='form-input'
              placeholder='Tier Name'
            />
          </div>
          <div className='mb-4 col-span-1'>
            <label
              htmlFor='tier_description'
              className='block text-gray-700 font-bold mb-2 text-lg'
            >
              Description
            </label>
            <input
              type='text'
              id='tier_description'
              name='tier_description'
              value={tierFormData.tier_description}
              onChange={handleTierFormChange}
              className='form-input'
              placeholder='Tier Description'
            />
          </div>
          <div className='mb-4 col-span-1'>
            <label
              htmlFor='tier_price'
              className='block text-gray-700 font-bold mb-2 text-lg'
            >
              Price
            </label>
            <input
              type='number'
              id='tier_price'
              name='tier_price'
              value={tierFormData.tier_price}
              onChange={handleTierFormChange}
              className='form-input'
              placeholder='Tier Price'
            />
          </div>
          <div className='mb-4 col-span-1'>
            <label
              htmlFor='available_quantity'
              className='block text-gray-700 font-bold mb-2 text-lg'
            >
              Available Quantity
            </label>
            <input
              type='number'
              id='available_quantity'
              name='available_quantity'
              value={tierFormData.available_quantity}
              onChange={handleTierFormChange}
              className='form-input'
              placeholder='Available Quantity'
            />
          </div>

          <div></div>
          <button
            type='submit'
            className='bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-4 rounded-md focus:outline-none block w-full'
            onClick={() =>
              createNewTicketTier(
                tierFormData.tier_name,
                tierFormData.tier_description,
                parseInt(tierFormData.tier_price),
                parseInt(tierFormData.available_quantity)
              )
            }
          >
            Add
          </button>
        </div>
      </Modal>
      <form className='my-12 w-full max-w-lg mx-auto' onSubmit={handleSubmit}>
        <section className='my-12'>
          <p className='text-gray-700 mb-4 font-bold uppercase'>Overview</p>
          <div className='mb-4'>
            <label
              htmlFor='eventType'
              className='block text-gray-700 font-bold mb-2 text-lg'
            >
              Type of Event
            </label>
            <select
              id='eventType'
              name='eventType'
              value={formData.categories[0] ?? ''}
              onChange={handleChange}
              className='form-input'
            >
              <option value='' disabled>
                Select event type
              </option>
              {categorieType.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className='mb-4'>
            <label
              htmlFor='image'
              className='block text-gray-700 font-bold mb-2 text-lg'
            >
              Banner Image
            </label>
            <input
              type='file'
              id='image'
              name='image'
              value={formData.image_url}
              onChange={handleChange}
              className='form-input'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='title'
              className='block text-gray-700 font-bold mb-2 text-lg'
            >
              Title
            </label>
            <input
              type='text'
              id='title'
              name='title'
              value={formData.title}
              onChange={handleChange}
              className='form-input'
              placeholder='Event Title'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='description'
              className='block text-gray-700 font-bold mb-2 text-lg'
            >
              Description
            </label>
            <input
              type='text'
              id='description'
              name='description'
              value={formData.description}
              onChange={handleChange}
              className='form-input'
              placeholder='Event description'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='overview'
              className='block text-gray-700 font-bold mb-2 text-lg'
            >
              About (Short note about event)
            </label>
            <textarea
              id='overview'
              name='overview'
              value={formData.overview}
              onChange={handleChange}
              className='form-input h-32 resize-none'
              placeholder='Event Overview'
            />
          </div>
        </section>

        {/*  */}

        <section className='my-12'>
          <p className='text-gray-700 mb-4 font-bold uppercase'>Date</p>

          <div className='mb-4'>
            <label
              htmlFor='venue_name'
              className='block text-gray-700 font-bold mb-2 text-lg'
            >
              Starting Date
            </label>
            <input
              type='date'
              id='start_date'
              name='start_date'
              value={formData.start_date.toString()}
              onChange={handleChange}
              className='form-input'
              placeholder='Starting Date'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='venue_name'
              className='block text-gray-700 font-bold mb-2 text-lg'
            >
              Ending Date
            </label>

            <input
              type='date'
              id='end_date'
              name='end_date'
              value={formData.end_date.toString()}
              onChange={handleChange}
              className='form-input'
              placeholder='Ending Date'
            />
          </div>
        </section>

        {/*  */}

        <section className='my-12'>
          <p className='text-gray-700 mb-4 font-bold uppercase'>Location</p>
          <div className='mb-4'>
            <label
              htmlFor='venue_name'
              className='block text-gray-700 font-bold mb-2 text-lg'
            >
              Venue Name
            </label>
            <input
              type='text'
              id='venue_name'
              name='venue_name'
              value={formData.location.venue_name}
              onChange={handleChange}
              className='form-input'
              placeholder='Venue Name'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='address'
              className='block text-gray-700 font-bold mb-2 text-lg'
            >
              Address
            </label>
            <input
              type='text'
              id='address'
              name='address'
              value={formData.location.address}
              onChange={handleChange}
              className='form-input'
              placeholder='Address'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='city'
              className='block text-gray-700 font-bold mb-2 text-lg'
            >
              City
            </label>
            <input
              type='text'
              id='city'
              name='city'
              value={formData.location.city}
              onChange={handleChange}
              className='form-input'
              placeholder='City'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='state'
              className='block text-gray-700 font-bold mb-2 text-lg'
            >
              State
            </label>
            <input
              type='text'
              id='state'
              name='state'
              value={formData.location.state}
              onChange={handleChange}
              className='form-input'
              placeholder='State'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='country'
              className='block text-gray-700 font-bold mb-2 text-lg'
            >
              Country
            </label>
            <input
              type='text'
              id='country'
              name='country'
              value={formData.location.country}
              onChange={handleChange}
              className='form-input'
              placeholder='Country'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='postal_code'
              className='block text-gray-700 font-bold mb-2 text-lg'
            >
              Postal Code
            </label>
            <input
              type='text'
              id='postal_code'
              name='postal_code'
              value={formData.location.postal_code}
              onChange={handleChange}
              className='form-input'
              placeholder='Postal Code'
            />
          </div>
        </section>

        {/*  */}

        <section className='my-12'>
          <p className='text-gray-700 mb-4 font-bold uppercase'>Tickets</p>

          <div className='mb-4'>
            <label
              htmlFor='ticket_price'
              className='block text-gray-700 font-bold mb-2 text-lg'
            >
              Ticket Price (Starter Price)
            </label>
            <input
              type='number'
              id='ticket_price'
              name='ticket_price'
              value={formData.ticket_price}
              onChange={handleChange}
              className='form-input'
              placeholder='Ticket Price'
            />
          </div>
          <div className='mt-8 mb-4'>
            <div className='flex items-center justify-between'>
              <p className='text-gray-700 mb-4 font-bold uppercase text-sm'>
                Ticket Tiers
              </p>
              <button
                type='submit'
                title='Add new ticket tier'
                className='bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-md focus:outline-none font-bold flex items-center gap-2'
                onClick={handleModalOpen}
              >
                <AiOutlinePlus />
                Create
              </button>
            </div>

            {!ticketTiers ||
              (ticketTiers.length === 0 && (
                <div className='p-8 my-8 border border-gray-100 rounded-md'>
                  <p className='text-center text-gray-500'>No tiers created</p>
                </div>
              ))}

            {ticketTiers.length > 0 && (
              <div>
                <div className='my-8 grid grid-cols-6 gap-4'>
                  <p className='col-span-2'>Tier Name</p>
                  <p className='col-span-2'>Price</p>
                  <p className='col-span-1'>Qty</p>
                  <p className='col-span-1'></p>
                </div>
                {ticketTiers.map((el: ITicketTier) => (
                  <div key={el._id} className='my-2 grid grid-cols-6 gap-4'>
                    <input
                      type='text'
                      id={el.name}
                      name={el.name}
                      value={el.name}
                      onChange={() => {}}
                      className='form-input capitalize col-span-2'
                      placeholder={el.name}
                    />

                    <input
                      type='number'
                      id={el.price.toString()}
                      name={el.price.toString()}
                      value={el.price}
                      onChange={() => {}}
                      className='form-input capitalize col-span-2'
                      placeholder={el.price.toString()}
                    />

                    <input
                      type='number'
                      id={el.available_qty.toString()}
                      name={el.available_qty.toString()}
                      value={el.available_qty}
                      onChange={() => {}}
                      className='form-input capitalize col-span-1'
                      placeholder={el.available_qty.toString()}
                    />
                    <button
                      type='button'
                      title='Delete ticket tier'
                      className='col-span-1 text-red-700'
                      onClick={() => handleDeleteTicketTier(el._id)}
                    >
                      <AiFillDelete />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <div className='flex items-center justify-center'>
          <button
            type='submit'
            className='bg-orange-700 hover:bg-orange-800 text-white font-bold py-3 px-4 rounded-md focus:outline-none block w-full'
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default EventFormComponent;
