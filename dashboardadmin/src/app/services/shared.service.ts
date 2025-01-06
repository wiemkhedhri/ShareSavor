import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private apiBasePath ="http://localhost:8081";
  constructor(private http:HttpClient) { }

  allbuisiness(){
    return this.http.get(`${this.apiBasePath}/business/getnumberofbuisiness`);
  }
  allorganisation(){
    return this.http.get(`${this.apiBasePath}/Organisation/getnumberoforganisation`);
  }
  allorders(){
    return this.http.get(`${this.apiBasePath}/commande/getnumberoforders`);
  }
  allpublication(){
    return this.http.get(`${this.apiBasePath}/publication/getnumberofpublication`);
  }
  GetallOrganisation(){
    return this.http.get(`${this.apiBasePath}/Organisation/getall`);
  }
  getallBsuisiness(){
    return this.http.get(`${this.apiBasePath}/business/getallbuisiness`);
  }
  getallPublication(){
    return this.http.get(`${this.apiBasePath}/publication/getpublication`);
  }
}
