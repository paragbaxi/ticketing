import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@paragbaxi-sgtickets/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  readonly subject = Subjects.ExpirationComplete;
}
