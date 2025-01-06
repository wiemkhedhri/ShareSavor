import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuisinessserviceService {
  private apiBasePath ="http://localhost:8081/business";
  constructor(private http:HttpClient) { }




  saveBuisiness(buisiness: any, id: any) {
    return this.http.post(this.apiBasePath+"/saveBuisiness",buisiness ) ;
  }
  findByRepresentative(id: any) {
    return this.http.get(this.apiBasePath+"/findByRepresentative"+ "/"+id) ;
  }
  UpdateBuisiness(entreprise:any , id:any){
    return this.http.put(this.apiBasePath+"/update/"+id , entreprise) ;
  }
  getfirsttwo(){
    return this.http.get("http://localhost:8081/allowed/getFirsttwo") ;
  }
  getLasttwo(){
    return this.http.get("http://localhost:8081/allowed/getLasttwo") ;
  }

}
