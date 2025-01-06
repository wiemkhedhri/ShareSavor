import { Component } from '@angular/core';
import { catchError } from 'rxjs';
import { CurrencyserviceService } from 'src/app/services/currency/currencyservice.service';
import { PublicationserviceService } from 'src/app/services/publication/publicationservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listepublication',
  templateUrl: './listepublication.component.html',
  styleUrls: ['./listepublication.component.css']
})
export class ListepublicationComponent {
  id=localStorage.getItem("id") ;
  liste!:any ;
  currentPage: number = 0;
  totalPages: number = 0;
  searchQuery = '';
  filteredListe : any;
  exchangeRates: any;
  selectedCurrency = 'TND'; // Default currency
  currencyOptions = ['TND', 'USD', 'EUR', 'GBP']; 

  constructor(private publicationservice:PublicationserviceService , private currencyService:CurrencyserviceService){
  }
  ngOnInit(){
    this.loadPublications(this.currentPage) ;
    this.fetchExchangeRates()

  }

  loadPublications(page:number){
this.publicationservice.getPaginatedPublications(this.id ,page , 3 ).subscribe((data)=>{
this.liste = data.content ;
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
      this.filteredListe = this.liste.filter((pub: any) =>
        (pub.aliment && pub.aliment.toLowerCase().includes(this.searchQuery.toLowerCase())) ||
        (pub.datepublication && pub.datepublication.toLowerCase().includes(this.searchQuery.toLowerCase())) ||
        (pub.date_expiration && pub.date_expiration.toLowerCase().includes(this.searchQuery.toLowerCase()))
      );
    } else {
      this.filteredListe = this.liste;  // Reset to all publications if search query is empty
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
        return price * rate;
      }
    }
    return price;
  }

  onCurrencyChange(currency: string): void {
    this.selectedCurrency = currency;
    this.fetchExchangeRates();
    this.filteredListe = this.liste.map((pub:any) => ({
      ...pub,
      prix_unitaire: this.convertPrice(pub.prix_unitaire)
    }));
  }
  deletePublication(publicationId: number) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.publicationservice.deletepublication(publicationId).subscribe(()=>{
          this.loadPublications(this.currentPage)
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        })


      }
    });
  }

}






