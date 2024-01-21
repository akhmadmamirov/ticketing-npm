import { Subjects } from "./subjects";

export interface TicketUpdtatedEvent {
  subject: Subjects.TicketUpdtated
  data : {
    id : string
    title: string
    price: number
    userId: string
  }
}