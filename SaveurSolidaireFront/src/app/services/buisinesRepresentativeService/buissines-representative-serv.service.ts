import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuissinesRepresentativeServService {
  private apiBasePath ="http://localhost:8081/buisinesrepr";
  constructor(private http:HttpClient) { }
  FindByEmail(email:any){
    return this.http.post(this.apiBasePath+"/findByEmail",email) ;
  }
  getById(id:any){
    return this.http.get(this.apiBasePath+"/getById/"+id);
  }
  updateimages(id:any ,representative:any){
    return this.http.put("http://localhost:8081/fileController/updateimage/"+id , representative);
  }
  updaterepresentative(id:any, representative:any){
return this.http.put(this.apiBasePath+"/update/"+id , representative);
  }

}
