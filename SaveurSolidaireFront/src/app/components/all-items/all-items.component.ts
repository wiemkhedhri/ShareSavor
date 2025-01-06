import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AllowedServiceService } from 'src/app/services/allowed/allowed-service.service';
import { CurrencyserviceService } from 'src/app/services/currency/currencyservice.service';

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.css']
})
export class AllItemsComponent {
  searchQuery = '';
  filteredListe : any;
  currentPage: number = 0;
  totalPages: number = 0;
  exchangeRates: any;
  liste:any;
  selectedCurrency = 'TND'; // Default currency
  currencyOptions = ['TND', 'USD', 'EUR', 'GBP']  ;
  selectedCompanyType = 'All';
  companyTypes:any;
constructor(private allowedservice:AllowedServiceService , private currencyService:CurrencyserviceService,private router:Router){}
ngOnInit(){
  this.loadPublications(this.currentPage);

}


filterByCompanyType() {
  if (this.selectedCompanyType === 'All') {
    this.filteredListe = this.liste; // Reset to all publications
  } else {
    this.filteredListe = this.liste.filter((pub: any) => pub.type == this.selectedCompanyType);
    console.log(this.filteredListe);
  }
}

onCompanyTypeChange() {
  this.filterByCompanyType();
}
  loadPublications(page:number){
    this.allowedservice.getAllPublication(page ,  ).subscribe((data:any)=>{
    this.liste = data.content ;
    console.log(this.liste)
    this.companyTypes = Array.from(new Set(this.liste.map((item :any)=> item.type)));
    this.filteredListe = this.liste ;
    this.totalPages = data.totalPages;
    })
      }
      goToPage(page: number): void {
        if (page >= 0 && page < this.totalPages) {
          this.currentPage = page;
          this.loadPublications(page);
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
            const aliment = pub.aliment ? pub.aliment.toLowerCase() : '';
            const datePublication = pub.datepublication ? pub.datepublication.toLowerCase() : '';
            const dateExpiration = pub.date_expiration ? pub.date_expiration.toLowerCase() : '';
            return (
              aliment.includes(this.searchQuery.toLowerCase()) ||
              datePublication.includes(this.searchQuery.toLowerCase()) ||
              dateExpiration.includes(this.searchQuery.toLowerCase())
            );
          });
        } else {
          this.filterByCompanyType();
          this.filteredListe = this.liste; // Reset to all publications if search query is empty
        }
      }

      fetchExchangeRates(): void {
        this.currencyService.getExchangeRates(this.selectedCurrency).subscribe(data => {
          this.exchangeRates = data.results; // Store the fetched rates
          console.log('Exchange Rates:', this.exchangeRates); // Debugging log
          console.log(`Current Rate for ${this.selectedCurrency}:`, this.exchangeRates[this.selectedCurrency]);
        });
      }

      convertPrice(price: number): number {
        console.log(`Converting price: ${price} to currency: ${this.selectedCurrency}`);
        if (this.exchangeRates && this.selectedCurrency !== 'TND') {
          const rate = this.exchangeRates[this.selectedCurrency];
          if (rate) {
            return price * rate; // Convert price from TND to selected currency
          }
        }
        return price; // Return original price if no conversion needed
      }

      onCurrencyChange(currency: string): void {
        this.selectedCurrency = currency;
        this.fetchExchangeRates(); // Fetch rates again when the currency changes
        this.filteredListe = this.liste.map((pub:any) => ({
          ...pub,
          prix_unitaire: this.convertPrice(pub.prix_unitaire) // Update prices for the new currency
        }));
      }

NavigatetoSingleProduct(id:any){
  sessionStorage.setItem("idproduct",id)
  this.router.navigateByUrl('/singleProduct')
}
}
