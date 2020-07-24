import { Component, OnInit } from '@angular/core';
import { ConsumerService } from'../../services/consumer.service';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-consumers',
  templateUrl: './consumers.component.html',
  styleUrls: ['./consumers.component.css']
})
export class ConsumersComponent implements OnInit {

  firstName : string;
  lastName : string;
  address : string;
  phoneNumber : string;
 

  editFirstName : string;
  editLastName : string;
  editAddress : string;
  editPhoneNumber : string;
  


  consumer = {
    first_name : '',
    last_name : '',
    address : '',
    phone_number : ''
  }
  
  consumerList : any;


  counter = 1;

  searchItem = '';

  form = false;
  edit = false;
  editIndex = null;
  searchShow = true;
  

  constructor(private consumerService: ConsumerService) { }

  createConsumer(): void {
    this.consumer.first_name = this.firstName;
    this.consumer.last_name = this.lastName;
    this.consumer.address = this.address;
    this.consumer.phone_number = this.phoneNumber;

    this.consumerService.create(this.consumer).subscribe(
      response => {
        console.log(response);
        this.getConsumers();
      },
      error => {
        console.log(error);
      }
    )
   
  }

  updateVolunteer(index) : void {
    const consumer = this.consumerList[index];
    const id = consumer.id;

    this.consumer.first_name = this.editFirstName;
    this.consumer.last_name = this.editLastName;
    this.consumer.address = this.editAddress;
    this.consumer.phone_number = this.editPhoneNumber;
    

    this.consumerService.update(id,this.consumer).subscribe(
      response=>{
        console.log(response);
        this.getConsumers();
        this.consumer = {
          first_name : '',
          last_name : '',
          address : '',
          phone_number : ''
          
        }
      },
      error=>{
        console.log(error);
      }
    )
  }

  deleteConsumer(index): void{
    const consumer = this.consumerList[index];
    const id = consumer.id;
    this.consumerService.delete(id).subscribe(
      response => {
        console.log(response);
        this.getConsumers();
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
    this.editAddress = '';

  }

  saveEdit(index) : void {
    this.updateVolunteer(index);
    this.edit = false;

    this.editFirstName = '';
    this.editLastName = '';
    this.editPhoneNumber = '';
    this.editAddress = '';

    this.consumer = {
      first_name : '',
      last_name : '',
      address : '',
      phone_number : ''
     
    }
  }

  cancelCreation() : void{
    this.form = false;
  }

  ngOnInit(): void {
    this.getConsumers();
    
  }

  getConsumers(): void{
    this.consumerService.getAll().subscribe(
      response => {
        this.consumerList = response;
        console.log(response);
      },

      error => {
        console.log(error);
      }
    )
  }





  // Search 

  search(){
   if(this.searchItem === ''){ 
   }

  else{
    const searchList = this.consumerList.filter(element => element.first_name.toLowerCase().includes(this.searchItem.toLowerCase())
                                                        || element.last_name.toLowerCase().includes(this.searchItem.toLowerCase())
                                                        || element.phone_number.toLowerCase().includes(this.searchItem.toLowerCase())
                                                        || element.address.toLowerCase().includes(this.searchItem.toLowerCase()));
    
    this.consumerList = searchList;
    this.searchShow = false;
  }
}

clear(){
  location.reload();
}

}
