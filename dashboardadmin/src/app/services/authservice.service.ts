import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  private apiBasePath ="http://localhost:8081/auth/";
  constructor(private http:HttpClient) { }
  Login(User: any): Observable<any> {
    return this.http.post<any>(this.apiBasePath+'login', User);
  }
  getbyid(id:any){
    return this.http.get(`http://localhost:8081/administrateur/getbyid/${id}`);
  }
}
