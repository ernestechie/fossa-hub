export const event = {
  _id: '1',
  title: 'MISS NDU 2023 - GLITZ AND GLAM',
  description: 'WATCH THE MISS NDU 2023 - GLITZ AND GLAM',
  image_url:
    'https://www.propertypro.ng/blog/wp-content/uploads/2022/04/lekki-event-center-decorated2.jpeg', // URL to event banner or image (optional)
  start_date: new Date('08-10-23'), // ISO 8601 format
  end_date: new Date('08-15-23'), // ISO 8601 format
  location: {
    venue_name: 'main auditorium',
    address: 'main campus',
    city: 'amassoma',
    state: 'bayelsa',
    country: 'nigeria',
    postal_code: '569000',
  },
  categories: ['party', 'event', '...'],
  tags: ['Tag1', 'Tag2', '...'],
  capacity: 100, // Maximum number of attendees allowed (optional)
  attendees: ['attendee_id1', 'attendee_id2', '...'], // List of registered attendees (optional)
  is_free: false, // Whether the event is free or paid
  ticket_price: 2000, // Ticket price if the event is not free (optional)
  registration_deadline: new Date('08-10-23'), // ISO 8601 format (optional)
  registration_required: true, // Whether registration is required or not
  ticket_tier: [
    {
      name: 'Regular',
      price: 2000,
      description: 'Standard admission ticket',
      available_qty: 200,
    },
    {
      name: 'VIP',
      price: 5000,
      description: 'VIP ticket with additional perks',
      available_qty: 50,
    },
    {
      name: 'Table For 4',
      price: 15000,
      description: 'Reservation for a VIP table (group of 4)',
      available_qty: 10,
    },
    {
      name: 'Table For 10',
      price: 40000,
      description: 'Reservation for a VIP table (group of 10)',
      available_qty: 5,
    },
  ],
  attachments: [
    {
      name: 'Attachment1',
      url: 'URL',
    },
    {
      name: 'Attachment2',
      url: 'URL',
    },
  ],
  created_at: new Date('07-10-23'), // ISO 8601 format
  updated_at: new Date('07-10-23'), // ISO 8601 format
};
