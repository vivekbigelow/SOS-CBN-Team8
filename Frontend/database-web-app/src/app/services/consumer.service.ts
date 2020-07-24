import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class ConsumerService {


  baseUrl = "http://localhost:8000/api/consumers/"
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(this.baseUrl);
  }

  get(id){
  
  }

  delete(id){
    return this.http.delete(`${this.baseUrl}${id}/`);
  }

  deleteAll(){
    return this.http.delete(this.baseUrl);
  }

  create(consumer){
    return this.http.post(this.baseUrl, consumer);
  }

  update(id, consumer){
    return this.http.put(`${this.baseUrl}${id}/`, consumer);
  }


// Search Methods NOT IMPLEMENTED 


  //findByFirstName(){

  //}

  //findByLastName(){

  //}

  //findByPhoneNumber(){

  //}

  //findByAddress(){
    
  //}
}
