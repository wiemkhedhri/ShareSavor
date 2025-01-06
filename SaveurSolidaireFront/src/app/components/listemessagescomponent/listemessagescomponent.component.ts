import { Component } from '@angular/core';
import { AllowedServiceService } from 'src/app/services/allowed/allowed-service.service';

@Component({
  selector: 'app-listemessagescomponent',
  templateUrl: './listemessagescomponent.component.html',
  styleUrls: ['./listemessagescomponent.component.css']
})
export class ListemessagescomponentComponent {
  contacts: any[] = [];
  entrepriseId = localStorage.getItem("id")
  constructor(private allowedService: AllowedServiceService) {}

  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts(): void {

    this.allowedService.getContactsByEntreprise(this.entrepriseId).subscribe(
      (data) => {
        this.contacts = data;
      },
      (error) => {
        console.error('Error fetching contacts:', error);
      }
    );
  }
}
