import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   private apiBasePath ="http://localhost:8081/auth/";
  constructor(private http:HttpClient) { }

  public Register(User:any){
return this.http.post(this.apiBasePath+"signup" , User) ;
  }
  Login(User: any): Observable<any> {
    return this.http.post<any>(this.apiBasePath+'login', User);
  }
}
