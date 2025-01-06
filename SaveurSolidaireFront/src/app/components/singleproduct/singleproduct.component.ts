import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AllowedServiceService } from 'src/app/services/allowed/allowed-service.service';
import { CurrencyserviceService } from 'src/app/services/currency/currencyservice.service';
import { PanierserviceService } from 'src/app/services/panieritem/panierservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css']
})
export class SingleproductComponent {
  singleproduct: any;
  id = sessionStorage.getItem("idproduct");
  exchangeRates: any;
  selectedCurrency = 'TND'; // Default currency
  currencyOptions = ['TND', 'USD', 'EUR', 'GBP'];
  quantity: number = 1;
  form!: FormGroup;
  idpanier = localStorage.getItem("panierId");
  quantitedisponible: any;
  CurrentUserState=localStorage.getItem("currentUserstate") ;
  constructor(
    private allowedservice: AllowedServiceService,
    private currencyService: CurrencyserviceService,
    private fb: FormBuilder,
    private PanierItemService: PanierserviceService,
    private router:Router
  ) {}

  ngOnInit() {
    this.CurrentUserState;
    this.form = this.fb.group({
      quantity: [{ value: this.quantity, disabled: true }, [Validators.min(1)]],
    });

    this.getbyid();
  }

  getbyid() {
    this.allowedservice.getPublicationById(this.id).subscribe((data) => {
      this.singleproduct = data;
      if (this.singleproduct.quantitedisponible === 0) {
        console.log(this.singleproduct.quantitedisponible);
      }
    });
  }

  fetchExchangeRates(): void {
    this.currencyService.getExchangeRates(this.selectedCurrency).subscribe((data) => {
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
    this.singleproduct.prix_unitaire = this.convertPrice(this.singleproduct.prix_unitaire);
  }

  increaseQuantity() {
    if (this.quantity < this.singleproduct.quantitedisponible) {
      this.quantity++;
    }
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  AddToCart() {
    if (this.singleproduct.quantitedisponible > 0) {
      this.PanierItemService.saveItem(this.idpanier, this.id, this.form.value).subscribe((data) => {
        Swal.fire({
          title: "Success!",
          text: "Added To Cart Successfully!",
          icon: "success"
        });
      });
    }
  }

  isOutOfStock(): boolean {
    return this.singleproduct && this.singleproduct.quantitedisponible === 0;
  }
  gotologin(){
    this.router.navigateByUrl('/authentification')
  }
}
