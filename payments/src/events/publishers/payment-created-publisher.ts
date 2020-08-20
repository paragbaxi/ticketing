import {
  Publisher,
  Subjects,
  PaymentCreatedEvent,
} from '@paragbaxi-sgtickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
