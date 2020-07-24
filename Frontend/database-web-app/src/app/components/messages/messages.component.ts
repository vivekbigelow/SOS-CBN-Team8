import { Component, OnInit } from '@angular/core';

import { MessageRecipientsService } from '../../services/message-recipients.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {


  showMessage = false;

  RECIPIENTS : any;
  recipientNumbers : any;

  message = {
    to : '',
    body : ''
  }

  constructor(private messageService : MessageService, private messageRecipientsService : MessageRecipientsService) { }

  startMessage() : void{
    this.showMessage = true;
    this.getRecipients();
  }

  cancelMessage(): void {
    this.RECIPIENTS = [];
    this.messageRecipientsService.clear();
    this.showMessage = false;
    
  }

  ngOnInit(): void {
    this.getRecipients();
  }

  getRecipients(){
    this.RECIPIENTS = this.messageRecipientsService.getRecipients();
  }

  getRecipientNumbers(){
    this.recipientNumbers = [];
    this.RECIPIENTS.forEach(element => {
      this.recipientNumbers.push(element.phone_number);
    });
  }

  formatNumbers(){
    this.recipientNumbers.forEach(element => {
      element = '+1' + element;
    });
  }

  removeRecipient(index){
    this.messageRecipientsService.remove(index);
    this.getRecipients();
  }

  sendMessage(){
    this.getRecipientNumbers();
    this.formatNumbers();
    this.message.to = this.recipientNumbers;
    this.messageService.sendMessage(this.message).subscribe(
      message => {
        console.log(message);
      },

      error => {
        console.log(error);
      }
    )
  }

}
