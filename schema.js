export const events = [
  {
    _id: '1',
    title: 'MISS NDU 2023 - GLITZ AND GLAM',
    description: 'WATCH THE MISS NDU 2023 - GLITZ AND GLAM',
    image_url:
      'https://www.propertypro.ng/blog/wp-content/uploads/2022/04/lekki-event-center-decorated2.jpeg', // URL to event banner or image (optional)
    start_date: new Date('08-10-23'), // ISO 8601 format
    end_date: new Date('08-15-23'), // ISO 8601 format
    location: {
      venue_name: 'agric auditorium',
      address: 'new site',
      city: 'amassoma',
      state: 'bayelsa',
      country: 'nigeria',
      postal_code: '569000',
    },
    categories: ['pageant', 'event', 'dinner'],
    tags: ['Tag1', 'Tag2', '...'],
    capacity: 100, // Maximum number of attendees allowed (optional)
    attendees: ['attendee_id1', 'attendee_id2', '...'], // List of registered attendees (optional)
    is_free: false, // Whether the event is free or paid
    ticket_price: 5000, // Ticket price if the event is not free (optional)
    registration_deadline: new Date('08-10-23'), // ISO 8601 format (optional)
    registration_required: true, // Whether registration is required or not
    ticket_tier: [
      {
        name: 'Regular',
        price: 5000,
        description: 'Standard admission ticket',
        available_qty: 50,
      },
      {
        name: 'VIP',
        price: 10000,
        description: 'VIP ticket with additional perks',
        available_qty: 30,
      },
      {
        name: 'Table For 4',
        price: 30000,
        description: 'Reservation for a VIP table (group of 4)',
        available_qty: 10,
      },
      {
        name: 'Table For 8',
        price: 70000,
        description: 'Reservation for a VVIP table (group of 8)',
        available_qty: 10,
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
  },
  {
    _id: '2',
    title: 'FOSSA Moonlight Feast',
    description: 'Feasting with the FOSSA Executives',
    image_url:
      'https://images.unsplash.com/photo-1536392706976-e486e2ba97af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhbmRsZWxpZ2h0JTIwZGlubmVyfGVufDB8fDB8fHww&w=1000&q=80', // URL to event banner or image (optional)
    start_date: new Date('09-14-23'), // ISO 8601 format
    end_date: new Date('09-14-23'), // ISO 8601 format
    location: {
      venue_name: 'sand dome',
      address: 'ending pele',
      city: 'amassoma',
      state: 'bayelsa',
      country: 'nigeria',
      postal_code: '569000',
    },
    categories: ['feast', 'picnic', 'dinner'],
    tags: ['Tag1', 'Tag2', '...'],
    capacity: 100, // Maximum number of attendees allowed (optional)
    attendees: ['attendee_id1', 'attendee_id2', '...'], // List of registered attendees (optional)
    is_free: false, // Whether the event is free or paid
    ticket_price: 5000, // Ticket price if the event is not free (optional)
    registration_deadline: new Date('09-17-23'), // ISO 8601 format (optional)
    registration_required: true, // Whether registration is required or not
    ticket_tier: [
      {
        name: 'Table For 4',
        price: 15000,
        description: 'Reservation for a table (group of 4)',
        available_qty: 40,
      },
      {
        name: 'Table For 8',
        price: 35000,
        description: 'Reservation for a VIP table (group of 8)',
        available_qty: 10,
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
    created_at: new Date('07-27-23'), // ISO 8601 format
    updated_at: new Date('07-27-23'), // ISO 8601 format
  },
];
