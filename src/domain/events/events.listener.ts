import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import axios from 'axios';

@Injectable()
export class EventsListener {
  @OnEvent('event.received')
  async handleDepositEvent(event: any) {
    try {
      await axios.put('https://localhost:3000/wallet/deposit', event);
    } catch (error) {
      console.error('Error sending event to Wallet API:', error);
    }
  }
}
