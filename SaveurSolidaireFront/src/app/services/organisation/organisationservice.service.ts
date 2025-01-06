import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrganisationserviceService {

  private apiBasePath ="http://localhost:8081/Organisation";
  constructor(private http:HttpClient) { }
  saveOrganisation(organisation:any , id:any){
    return this.http.post(`${this.apiBasePath}/saveOrganisation/${id}`,organisation);
  }
  FindByOrganisationRepresentative(id:any){
    return this.http.get(`${this.apiBasePath}/GetByRepresentative/${id}`);
  }
  updateOrganisation(id:any,organisation:any){
    return this.http.put(`${this.apiBasePath}/updateOrganisation/${id}`,organisation);
  }
  FindByID(id:any){
    return this.http.get(`${this.apiBasePath}/getbyid/${id}`);
  }
 
}

