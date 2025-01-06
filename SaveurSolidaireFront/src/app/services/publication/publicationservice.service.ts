import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicationserviceService {
  private apiBasePath ="http://localhost:8081/publication";
  constructor(private http:HttpClient) { }
  SavePublication(publication:any , id:any){
return this.http.post(this.apiBasePath+"/addPublication/"+id ,publication);
  }
  findByRepresentative(id:any){
    return this.http.get(this.apiBasePath+"/findByRepresentative/"+id);
  }

  getPaginatedPublications(id: any, page: number, size: number = 3): Observable<any> {
    return this.http.get(`${this.apiBasePath}/findByRepresentative/${id}?page=${page}&size=${size}`);
  }
  deletepublication(id:number){
    return this.http.delete(this.apiBasePath+"/delete/"+id);
  }

}
