import {
  Subjects,
  Publisher,
  OrderCancelledEvent,
} from "@edwintickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled =
    Subjects.OrderCancelled;
}
