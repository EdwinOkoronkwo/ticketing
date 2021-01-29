import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from "@edwintickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
