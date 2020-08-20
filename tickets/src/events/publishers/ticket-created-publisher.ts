import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from '@paragbaxi-sgtickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
