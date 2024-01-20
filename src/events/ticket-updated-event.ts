import { Subjects } from "./subjects";

export interface TicketUpdtatedEvent {
  subject: Subjects.TicketCreated
  data : {
    id : string
    title: string
    price: number
    userId: string
  }
}