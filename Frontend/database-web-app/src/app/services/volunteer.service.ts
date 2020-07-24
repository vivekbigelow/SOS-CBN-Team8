import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class VolunteerService {


  baseUrl = 'http://localhost:8000/api/volunteers/';
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(this.baseUrl);
  }

  get(id){
    return this.http.get(`${this.baseUrl}${id}`);
  }

  create(volunteer){
    return this.http.post(this.baseUrl, volunteer);
  }

  update(id, volunteer){
    return this.http.put(`${this.baseUrl}${id}/`, volunteer);
  }

  delete(id){
    return this.http.delete(`${this.baseUrl}${id}/`);
  }

  deleteAll(){
    return this.http.delete(this.baseUrl);
  }

  
  
  //Search methods 
  
  findByFirstName(firstName){
    return this.http.get(`${this.baseUrl}?first_name=${firstName}`)
  }

  //findByLastName(){
    
  //}

  //findByPhoneNumber(){

  //}

  
}
