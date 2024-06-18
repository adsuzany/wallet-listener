import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('event')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  handleEvent(@Body() event: Event): Object {
    console.debug('Received event:', event);
    return { message: 'Event received' };
  }
}
