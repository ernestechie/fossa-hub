export const events = [
  {
    _id: '1',
    title: 'MISS NDU 2023 - GLITZ AND GLAM',
    description: 'WATCH THE MISS NDU 2023 - GLITZ AND GLAM',
    overview:
      'Temporibus nesciunt iste tempora accusantium suscipit accusamus qui, voluptates exercitationem! Nulla, illo.Amet quod, repudiandae minima consectetur aut dicta inventore alias.Nesciunt eaque totam aliquid officiis ea harum fuga, possimus, libero cumque facere, voluptate voluptas expedita autem ad? Quae cupiditate dignissimos cum. Sapiente veritatis animi at, odit optio maxime quidem earum aperiam nostrum necessitatibus saepe dolorum adipisci nihil atque se qui, quas ullam ducimus perferendis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio reprehenderit dolorum odit nesciunt delectus esse itaque enim? Reprehenderit, pariatur sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente veritatis animi at, odit optio maxime quidem earum aperiam nostrum necessitatibus saepe dolorum adipisci nihil atque se qui, quas ullam ducimus perferendis.Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
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
    ticket_price: 3500, // Ticket price if the event is not free (optional)
    registration_deadline: new Date('08-10-23'), // ISO 8601 format (optional)
    registration_required: true, // Whether registration is required or not
    tickets_sold: [
      {
        _id: 1,
        number: 1,
        tier: 'regular',
        price: 3500,
        buyer_name: 'isaiah ernest',
        purchase_date: new Date('07-02-2023'),
        verification_status: false,
      },
    ],
    ticket_tiers: [
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
      {
        _id: 3,
        name: 'Table For 4',
        price: 30000,
        description: 'Reservation for a VIP table (group of 4)',
        available_qty: 10,
      },
      {
        _id: 3,
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
    posted_by: { _id: '1', name: 'Super Admin 2', role: 'super admin' },
    created_at: new Date('07-10-23'), // ISO 8601 format
    updated_at: new Date('07-10-23'), // ISO 8601 format
  },
  {
    _id: '2',
    title: 'FOSSA Moonlight Feast',
    description: 'Feasting with the FOSSA Executives',
    overview:
      'Temporibus nesciunt iste tempora accusantium suscipit accusamus qui, voluptates exercitationem! Nulla, illo.Amet quod, repudiandae minima consectetur aut dicta inventore alias.Nesciunt eaque totam aliquid officiis ea harum fuga, possimus, libero cumque facere, voluptate voluptas expedita autem ad? Quae cupiditate dignissimos cum. Sapiente veritatis animi at, odit optio maxime quidem earum aperiam nostrum necessitatibus saepe dolorum adipisci nihil atque se qui, quas ullam ducimus perferendis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio reprehenderit dolorum odit nesciunt delectus esse itaque enim? Reprehenderit, pariatur sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente veritatis animi at, odit optio maxime quidem earum aperiam nostrum necessitatibus saepe dolorum adipisci nihil atque se qui, quas ullam ducimus perferendis.Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
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
    tickets_sold: [
      {
        _id: 1,
        number: 1,
        tier: 'table for 4',
        price: 15000,
        buyer_name: 'george lucky',
        purchase_date: new Date('07-27-2023'),
        verification_status: false,
      },
    ],
    ticket_tiers: [
      {
        _id: 1,
        name: 'Table For 4',
        price: 15000,
        description: 'Reservation for a table (group of 4)',
        available_qty: 40,
      },
      {
        _id: 2,
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
    posted_by: { _id: '2', name: 'Admin 2', role: 'blog admin' },
    created_at: new Date('07-27-23'), // ISO 8601 format
    updated_at: new Date('07-27-23'), // ISO 8601 format
  },
];
