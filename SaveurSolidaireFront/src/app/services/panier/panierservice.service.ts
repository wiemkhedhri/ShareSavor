import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanierserviceService {
  private apiBasePath ="http://localhost:8081/panier";
  constructor(private http:HttpClient) { }
  savePanier(idorganisation:any){
return this.http.get(`${this.apiBasePath}/AddPanier/${idorganisation}`)
  }
  getByOrganisationId(id:any){
    return this.http.get(`${this.apiBasePath}/GetByOrganisation/${id}`)
  }
}
