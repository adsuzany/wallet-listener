import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  eventReceived(): string {
    return 'Event received';
  }
}
