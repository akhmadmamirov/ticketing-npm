import { Subjects } from "./subjects";

//Adding ticket updated: Fix
export interface TicketUpdtatedEvent {
  subject: Subjects.TicketUpdtated
  data : {
    id : string
    title: string
    price: number
    userId: string
  }
}