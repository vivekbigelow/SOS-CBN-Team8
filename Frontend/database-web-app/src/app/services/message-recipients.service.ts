import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageRecipientsService {

  recipients = [];

  add(recipient): void{
    this.recipients.push(recipient);
  }

  remove(index): void{
    this.recipients.splice(index, 1);
  }

  clear() : void {
    this.recipients = [];
  }


  getRecipients(){
    return this.recipients;
  }

  constructor() { }
}
