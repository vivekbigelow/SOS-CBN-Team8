 import { Component, OnInit } from '@angular/core';
 import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-twilio',
  templateUrl: './twilio.component.html',
  styleUrls: ['./twilio.component.css']
})
export class TwilioComponent implements OnInit {
  
  messageBody : string;

  baseUrl = 'https://api.twilio.com/2010-04-01/Accounts/AC96e56694ccae69568fab2c59966c8545/';

  messageObject = {
    body : '',
    from :'+12569603422',
    to : '',
    
  };
   
  constructor(private http : HttpClient) { }

  sendMessage() {
    const accountSid = 'AC96e56694ccae69568fab2c59966c8545';
    const authToken = '5194c4526af7cf8e5e2dd5cf6747d79f';

    return this.http.post(this.baseUrl, this.messageObject);
    

  }

  ngOnInit(): void {
  }

}


