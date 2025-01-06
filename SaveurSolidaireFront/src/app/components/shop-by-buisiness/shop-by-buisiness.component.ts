import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AllowedServiceService } from 'src/app/services/allowed/allowed-service.service';

@Component({
  selector: 'app-shop-by-buisiness',
  templateUrl: './shop-by-buisiness.component.html',
  styleUrls: ['./shop-by-buisiness.component.css']
})
export class ShopByBuisinessComponent {
  liste!:any ;
  currentPage: number = 0;
  totalPages: number = 0;
  searchQuery = '';
  filteredListe : any;

constructor(private allowedservice:AllowedServiceService , private router:Router){}
ngOnInit(){


  this.loadBuisnises(this.currentPage)
}

  loadBuisnises(page:number){
    this.allowedservice.GetAllBuisineses(page , 3).subscribe((data:any)=>{
    this.liste = data.content ;
    this.filteredListe = this.liste ;
    this.totalPages = data.totalPages;
    console.log("data",this.filteredListe)
    })
      }
      goToPage(page: number): void {
        if (page >= 0 && page < this.totalPages) {
          this.currentPage = page;
          this.loadBuisnises(page);
        }
      }

      nextPage(): void {
        if (this.currentPage < this.totalPages - 1) {
          this.goToPage(this.currentPage + 1);
        }
      }

      previousPage(): void {
        if (this.currentPage > 0) {
          this.goToPage(this.currentPage - 1);
        }
      }

      filterPublications() {
        if (this.searchQuery) {
          this.filteredListe = this.liste.filter((pub: any) => {
            return (
              (pub.name && pub.name.toLowerCase().includes(this.searchQuery.toLowerCase())) ||
              (pub.email && pub.email.toLowerCase().includes(this.searchQuery.toLowerCase())) ||
              (pub.location && pub.location.toLowerCase().includes(this.searchQuery.toLowerCase())) ||
              (pub.type && pub.type.toLowerCase().includes(this.searchQuery.toLowerCase())) ||
              (pub.description && pub.description.toLowerCase().includes(this.searchQuery.toLowerCase()))

            );
          });
        } else {
          this.filteredListe = this.liste;
        }
      }


      viewItems(pubId: string) {

        sessionStorage.setItem("idbuisiness",pubId)
        this.router.navigate(['/itemByBuisiness'] );
      }


}
