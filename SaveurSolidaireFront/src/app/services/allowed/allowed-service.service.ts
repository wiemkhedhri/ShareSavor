import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllowedServiceService {
  private apiBasePath ="http://localhost:8081/allowed";
  constructor(private http:HttpClient) { }
  GetAllBuisineses( page: number, size: number = 4){
    return this.http.get(`${this.apiBasePath}/getallBuisines?page=${page}&size=${size}`);
  }
  getPaginatedPublications(id: any, page: number, size: number = 3): Observable<any> {
    return this.http.get(`${this.apiBasePath}/findByRepresentative/${id}?page=${page}&size=${size}`);
  }
  getRepresentativeByEntrprise(id:any){
    return this.http.get(`${this.apiBasePath}/getRepresenattiveByEntreprise/${id}`);
  }
  getAllPublication(page: number, size: number = 4){
    return this.http.get(`${this.apiBasePath}/getAllPublication?page=${page}&size=${size}`); }
    getPublicationById(id:any){
      return this.http.get(`${this.apiBasePath}/getPublicationById/${id}`);
    }
    getAllentreprise(){
      return this.http.get<any[]>(`${this.apiBasePath}/getallentreprise`);
    }

  addContact(contact: any, entrepriseId: number): Observable<any> {
    const url = `${this.apiBasePath}/createcontact`;
    const params = new HttpParams().set('entrepriseId', entrepriseId.toString());
    return this.http.post<any>(url, contact, { params });
  }
  getContactsByEntreprise(entrepriseId: any): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8081/contact/entreprise/${entrepriseId}`);
  }
}
