import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageRecipientsService } from './message-recipients.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {


   twilioNumber = '+12569603422';
   accountSid = 'AC96e56694ccae69568fab2c59966c8545';
   
  messageObject = {
    from: this.twilioNumber,

  };

  httpHeaders

  baseUrl = 'https://api.twilio.com/2010-04-01/Accounts/';

  constructor(private http : HttpClient, private messageRecipientsService : MessageRecipientsService) {
    this.httpHeaders = new HttpHeaders({'Authorization': 'Basic QUM5NmU1NjY5NGNjYWU2OTU2OGZhYjJjNTk5NjZjODU0NTo1MTk0YzQ1MjZhZjdjZjhlNWUyZGQ1Y2Y2NzQ3ZDc5Zg=='})
   }

  addMessage(message) {
    const formData: FormData = new FormData();

    formData.append('To', message.to);
    formData.append('From', this.messageObject.from);
    formData.append('Body', message.body);

    return formData;
    
  }

  getRecipients(){

  }

  sendMessage(message) : Observable<any>{
    
    const formData: FormData = new FormData();

    formData.append('To', message.to);
    formData.append('From', this.messageObject.from);
    formData.append('Body', message.body);

    return this.http.post(`${this.baseUrl}${this.accountSid}/Messages.json`, formData, 
    {headers: this.httpHeaders});
  }
}



 
