import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanierserviceService {
  private apiBasePath = "http://localhost:8081/panierItem"; // Base URL for the API

  constructor(private http: HttpClient) { }

  saveItem(idpanier: any, idproduit: any, panieritem: any): Observable<any> {
    return this.http.post(`${this.apiBasePath}/addItem/${idproduit}/${idpanier}`, panieritem);
  }

  GetByPanier(id: any): Observable<any> {
    return this.http.get(`${this.apiBasePath}/getByPanier/${id}`);
  }
  deletItem(id: any): Observable<any> {
    return this.http.delete(`${this.apiBasePath}/delete/${id}`);
  }
  updateItemQuantity(id: number, newQuantity: number): Observable<any> {
    const url = `${this.apiBasePath}/updateQuantity/${id}`;
    return this.http.put(url, newQuantity);
  }
}
