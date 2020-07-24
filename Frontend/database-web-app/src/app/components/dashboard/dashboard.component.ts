import { Component, OnInit } from '@angular/core';


import { ConsumerService } from '../../services/consumer.service';
import { VolunteerService } from "../../services/volunteer.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  volunteers : any;
  consumers : any;

  constructor(private consumerService : ConsumerService, private volunteerService : VolunteerService) { }

  ngOnInit(): void {
    this.getVolunteers();
    this.getConsumers();
  }

  getVolunteers() : void {
     this.volunteerService.getAll().subscribe(
       data =>{
         this.volunteers = data;
         console.log(data);
       },
       error => {
         console.log(error);
       }
     );

     console.log(this.volunteers);
  }

  getConsumers() : void {
    this.consumerService.getAll().subscribe(
      data =>{
        this.consumers = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
 }

}
