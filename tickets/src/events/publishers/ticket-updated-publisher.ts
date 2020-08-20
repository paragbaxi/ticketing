import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from '@paragbaxi-sgtickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
