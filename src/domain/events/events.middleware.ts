import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class EventsMiddleware implements NestMiddleware {
  constructor(private eventEmitter: EventEmitter2) {}

  use(request: Request, ressponse: Response, next: NextFunction) {
    const event = request.body;

    this.eventEmitter.emit('event.received', event);

    next();
  }
}
