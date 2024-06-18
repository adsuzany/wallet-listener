import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { EventsListener } from './domain/events/events.listener';
import { EventsMiddleware } from './domain/events/events.middleware';

@Module({
  imports: [EventEmitterModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, EventsListener],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(EventsMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
