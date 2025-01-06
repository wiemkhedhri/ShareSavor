import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {

  constructor(private http:HttpClient){}
  private totalAmount: number = 0;

  setTotalAmount(amount: number) {
    this.totalAmount = amount;
  }

  getTotalAmount(): number {
    return this.totalAmount;
  }
  createCommande(panierId: any, totalCost: number,id:any) {
    return this.http.post(`http://localhost:8081/commande/create/${id}`, null, {
      params: {
        panierId: panierId.toString(),
        totalCost: totalCost.toString()
      }
    });
  }
  getListCommandebyOrganisationRepresantative(id:any){
return this.http.get(`http://localhost:8081/commande/organisationrepresentative/${id}`)
  }
getitemsbycommande(idcommande:any){
  return this.http.get(`http://localhost:8081/commande/panieritems/${idcommande}`)
}
}
