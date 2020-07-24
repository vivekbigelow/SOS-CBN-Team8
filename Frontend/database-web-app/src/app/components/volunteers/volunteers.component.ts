import { Component, OnInit } from '@angular/core';
import { VolunteerService } from'../../services/volunteer.service';

import { FormControl } from '@angular/forms';
import { MessageRecipientsService } from '../../services/message-recipients.service';






@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.component.html',
  styleUrls: ['./volunteers.component.css']
})
export class VolunteersComponent implements OnInit {

//Volunteer Input  Variables

  firstName : string;
  lastName : string;
  phoneNumber : string;
  positionTitle : string;

  editFirstName : string;
  editLastName : string;
  editPhoneNumber : string;
  editPositionTitle : string;


  //Container for Volunteer Creation

   volunteer = {
    first_name : '',
    last_name : '',
    phone_number : '',
    position_title : ''
  }

  //Search input
  searchItem = '';

  volunteerList : any;
  recipientList = [];

  counter = 1;

  form = false;
  edit = false;
  editIndex = null;
  searchShow = true;
  

  constructor(private volunteerService: VolunteerService, private messageRecipientsService : MessageRecipientsService) { }

  assignVolunteerInfo(){
    this.volunteer.first_name = this.firstName;
      this.volunteer.last_name = this.lastName;
      this.volunteer.phone_number = this.phoneNumber;
      this.volunteer.position_title = this.positionTitle;
  }

  createVolunteer(): void {
      this.assignVolunteerInfo();

    
      this.volunteerService.create(this.volunteer).subscribe(
        response => {
          console.log(response);
          this.getVolunteers();
        },
        error => {
          console.log(error);
        }
      )
  }


  updateVolunteer(index) : void {
    const volunteer = this.volunteerList[index];
    const id = volunteer.id;

    this.volunteer.first_name = this.editFirstName;
    this.volunteer.last_name = this.editLastName;
    this.volunteer.phone_number = this.editPhoneNumber;
    this.volunteer.position_title = this.editPositionTitle;

    this.volunteerService.update(id,this.volunteer).subscribe(
      response=>{
        console.log(response);
        this.getVolunteers();
        this.volunteer = {
          first_name : '',
          last_name : '',
          phone_number : '',
          position_title : ''
        }
      },
      error=>{
        console.log(error);
      }
    )
  }

  deleteVolunteer(index): void{
    const volunteer = this.volunteerList[index];
    const id = volunteer.id;
    this.volunteerService.delete(id).subscribe(
      response=>{
        console.log(response);
        this.getVolunteers();
      },
      error => {
        console.log(error);
      }
    )
  }
  

  showForm(): void {
    this.form = true;
  }

  editShow(i): void {
    this.edit = true;
    this.editIndex = i;
  }

  cancelEdit(): void{
    this.edit = false;
    this.editIndex = null;

    this.editFirstName = '';
    this.editLastName = '';
    this.editPhoneNumber = '';
    this.editPositionTitle = '';

  }

  saveEdit(index) : void {
    this.updateVolunteer(index);
    this.edit = false;

    this.editFirstName = '';
    this.editLastName = '';
    this.editPhoneNumber = '';
    this.editPositionTitle = '';

    this.volunteer = {
      first_name : '',
      last_name : '',
      phone_number : '',
      position_title : ''
    }
  }

  cancelCreation() : void{
    this.form = false;
  }

  ngOnInit(): void {
    this.getVolunteers();
    
  }

  getVolunteers(): void{
   this.volunteerService.getAll().subscribe(
     response =>{
       this.volunteerList = response;
       console.log(this.volunteerList);
       console.log(response);
     },
     error=>{
       console.log(error);
     }
   )
  }


  addRecipient(index){
    this.messageRecipientsService.add(this.volunteerList[index]);
  }

  // Search 

  search(){
    if(this.searchItem === ''){
      
    }
    else{
      const searchList = this.volunteerList.filter(element => element.first_name.toLowerCase().includes(this.searchItem.toLowerCase())
                                                      || element.last_name.toLowerCase().includes(this.searchItem.toLowerCase())
                                                      || element.phone_number.toLowerCase().includes(this.searchItem.toLowerCase())
                                                      || element.position_title.toLowerCase().includes(this.searchItem.toLowerCase()));

      
      
      this.volunteerList = searchList;
      this.searchShow = false;

    }
  }

  clear(){
    location.reload();
  }
  

}

