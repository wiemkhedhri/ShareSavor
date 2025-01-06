import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { PanierserviceService } from 'src/app/services/panieritem/panierservice.service';
import Swal from 'sweetalert2';
import { SharedserviceService } from 'src/app/services/shared/sharedservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  Items: any = [];
  idpanier = localStorage.getItem("panierId");
  idrepresentative = localStorage.getItem("id");
  totalPrice: number = 0;

  constructor(private panieritemservice: PanierserviceService, private sanitizer: DomSanitizer , private sharedService:SharedserviceService,private router:Router) {}

  ngOnInit() {
    this.getitems();
  }

  getSanitizedUrl(image: string) {
    return this.sanitizer.bypassSecurityTrustStyle(`url('http://localhost:8081/fileController/files/${image}')`);
  }

  getitems() {
    this.panieritemservice.GetByPanier(this.idpanier).subscribe((data) => {
      this.Items = data;
      this.Items.forEach((item: any) => {
        item.total = this.calculateItemTotal(item);
      });
      this.calculateCartTotal();
    });
  }

  calculateItemTotal(item: any) {
    const quantity = item.quantity || 1;
    const unitPrice = item.publication.prix_unitaire || 0;
    return quantity * unitPrice;
  }

  calculateCartTotal() {
    this.totalPrice = 0;
    this.Items.forEach((item: any) => {
      this.totalPrice += item.total;
    });
  }

  increaseQuantity(item: any) {
    if (item.quantity < item.publication.quantitedisponible) {
      item.quantity++;
      item.total = this.calculateItemTotal(item);
      this.updateItemQuantity(item);
      this.calculateCartTotal();
    }
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      item.total = this.calculateItemTotal(item);
      this.updateItemQuantity(item);
      this.calculateCartTotal();
    }
  }

  updateItemQuantity(item: any) {
    this.panieritemservice.updateItemQuantity(item.id, item.quantity).subscribe(() => {
      console.log(`Quantity for item ${item.id} updated to ${item.quantity}`);
    });
  }

  deleteitem(id: any) {
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
        this.panieritemservice.deletItem(id).subscribe(() => {
          Swal.fire({
            title: "Deleted!",
            text: "Your Item has been deleted.",
            icon: "success"
          });
          this.getitems();
        });
      }
    });
  }
  proceedToCheckout() {
    if (this.idpanier) {
      this.sharedService.createCommande(this.idpanier, this.totalPrice,this.idrepresentative).subscribe(
        (response) => {
          console.log("Commande created:", response);
          this.sharedService.setTotalAmount(this.totalPrice);
          this.router.navigate(['/paiement']);
        },
        (error) => {
          console.error("Error creating Commande:", error);
          Swal.fire({
            title: "Error!",
            text: "Failed to create Commande.",
            icon: "error",
            confirmButtonText: "OK"
          });
        }
      );
    } else {
      console.error("Cannot proceed to checkout: Panier ID not found.");
      Swal.fire({
        title: "Error!",
        text: "Your cart is not available. Please refresh or add items to your cart.",
        icon: "error",
        confirmButtonText: "OK"
      });
    }
  }
}
