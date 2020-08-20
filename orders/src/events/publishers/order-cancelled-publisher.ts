import {
  Subjects,
  Publisher,
  OrderCancelledEvent,
} from '@paragbaxi-sgtickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
