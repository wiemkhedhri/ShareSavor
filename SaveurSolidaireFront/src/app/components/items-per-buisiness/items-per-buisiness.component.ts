import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AllowedServiceService } from 'src/app/services/allowed/allowed-service.service';
import { CurrencyserviceService } from 'src/app/services/currency/currencyservice.service';

@Component({
  selector: 'app-items-per-buisiness',
  templateUrl: './items-per-buisiness.component.html',
  styleUrls: ['./items-per-buisiness.component.css']
})
export class ItemsPerBuisinessComponent {
  id=localStorage.getItem("idbuisiness");
  representative:any;
  liste:any;
  searchQuery = '';
  filteredListe : any;
  currentPage: number = 0;
  totalPages: number = 0;
  exchangeRates: any;
  selectedCurrency = 'TND'; // Default currency
  currencyOptions = ['TND', 'USD', 'EUR', 'GBP'];


  constructor(private activatedRoute:ActivatedRoute , private allowedservice:AllowedServiceService ,private router:Router, private currencyservice:CurrencyserviceService){
    this.id=sessionStorage.getItem("idbuisiness");
  }
  ngOnInit(){




    this.getRepresentativeByEntreprise(this.currentPage)

  }
getRepresentativeByEntreprise(page:number){
  this.allowedservice.getRepresentativeByEntrprise(this.id).subscribe((data)=>{
  this.representative = data ;

  this.allowedservice.getPaginatedPublications(this.representative.id,page,4).subscribe((data)=>{
this.liste = data.content;
this.totalPages = data.totalPages;
this.filteredListe = this.liste ;
  })
  })
}

filterPublications() {
  if (this.searchQuery) {
    this.filteredListe = this.liste.filter((pub: any) =>
      (pub.aliment && pub.aliment.toLowerCase().includes(this.searchQuery.toLowerCase())) ||
      (pub.datepublication && pub.datepublication.toLowerCase().includes(this.searchQuery.toLowerCase())) ||
      (pub.date_expiration && pub.date_expiration.toLowerCase().includes(this.searchQuery.toLowerCase()))
    );
  } else {
    this.filteredListe = this.liste;  // Reset to all publications if search query is empty
  }
}

goToPage(page: number): void {
  if (page >= 0 && page < this.totalPages) {
    this.currentPage = page;
    this.getRepresentativeByEntreprise(page);
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

fetchExchangeRates(): void {
  this.currencyservice.getExchangeRates(this.selectedCurrency).subscribe(data => {
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
      return price * rate;
    }
  }
  return price;
}

onCurrencyChange(currency: string): void {
  this.selectedCurrency = currency;
  this.fetchExchangeRates(); // Fetch rates again when the currency changes
  this.filteredListe = this.liste.map((pub:any) => ({
    ...pub,
    prix_unitaire: this.convertPrice(pub.prix_unitaire)
  }));
}

NavigatetoSingleProduct(id:any){
  sessionStorage.setItem("idproduct",id)
  this.router.navigateByUrl('/singleProduct')
}
}
