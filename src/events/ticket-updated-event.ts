import { Subjects } from './subjects';
//interface for updated evets
export interface TicketUpdatedEvent {
  subject: Subjects.TicketUpdated;
  data: {
    id: string;
    title: string;
    price: number;
    userId: string;
  };
}
