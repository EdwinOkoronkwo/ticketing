import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@edwintickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete =
    Subjects.ExpirationComplete;
}
