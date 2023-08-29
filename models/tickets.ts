export interface ITicket {
  _id: string;
  number: string | number; // Generate by adding 1 to the length of the tickets array.
  tier: string;
  price: number;
  buyer_name: string;
  purchase_date: Date;
  verification_status: boolean; // TRUE means the buyer has atttended the party, FALSE means otherwise.
  // If this returns true, the attendee won't be allowed to enter. This reduces the chances of fraud.
}

export interface ITicketTier {
  _id: string;
  name: string;
  price: number;
  description: string;
  available_qty: number;
}
