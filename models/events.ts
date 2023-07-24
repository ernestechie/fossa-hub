export interface IEvent {
  _id: string;
  title: string;
  description: string;
  image_url: string;
  start_date: Date;
  end_date: Date;
  location: {
    venue_name: string;
    address: string;
    city: string;
    state: string;
    country: string;
    postal_code: string | number;
  };
  categories: string[];
  tags: string[];
  capacity: number;
  attendees: string[];
  is_free: boolean;
  ticket_price: number;
  registration_required: boolean;
  registration_deadline: Date;
  ticket_tier: {
    name: string;
    price: number;
    description: string;
    available_qty: number;
  }[];
  attachments: {
    name: string;
    url: string;
  }[];
  created_at: Date;
  updated_at: Date;
}
