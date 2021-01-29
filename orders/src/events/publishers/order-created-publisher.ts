import {
  Publisher,
  OrderCreatedEvent,
  Subjects,
} from "@edwintickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
