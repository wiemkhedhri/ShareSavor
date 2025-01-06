import { AfterViewInit, Component } from '@angular/core';
import { SharedserviceService } from 'src/app/services/shared/sharedservice.service';


declare var paypal: any;

@Component({
  selector: 'app-paypal-button',
  templateUrl: './paypal-button.component.html',
  styleUrls: ['./paypal-button.component.css']
})
export class PaypalButtonComponent implements AfterViewInit{



  totalAmount!: number;

  constructor(private sharedService: SharedserviceService) {}

  ngOnInit() {
    this.totalAmount = this.sharedService.getTotalAmount();
  }



  ngAfterViewInit(): void {
    this.renderPayPalButton();
  }

  renderPayPalButton(): void {
    paypal.Buttons({
      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: '100.00'  // Le montant du paiement
            }
          }]
        });
      },
      onApprove: (data: any, actions: any) => {
        return actions.order.capture().then((details: any) => {
          alert('Transaction effectuée avec succès par ' + details.payer.name.given_name);
        });
      },
      onError: (err: any) => {
        console.error('Erreur lors du paiement', err);
      }
    }).render('#paypal-button-container');
  }
}
