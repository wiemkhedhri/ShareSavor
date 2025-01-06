import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrganisationRepresentativeserviceService {
  private apiBasePath ="http://localhost:8081/organisationRepresenative";
  constructor(private http:HttpClient) { }
  GetById(id:any){
    return this.http.get(`${this.apiBasePath}/FindById/${id}`);
  }
  updateimages(id:any ,representative:any){
    return this.http.put("http://localhost:8081/fileController/updateimageOrganisation/"+id , representative);
  }
  updaterepresentative(id:any,reprsentative:any){
    return this.http.put(`${this.apiBasePath}/update/${id}`,reprsentative);
  }
}
