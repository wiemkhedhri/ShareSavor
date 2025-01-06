import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AllowedServiceService } from 'src/app/services/allowed/allowed-service.service';
import { SharedserviceService } from 'src/app/services/shared/sharedservice.service';

@Component({
  selector: 'app-commandslistecomponents',
  templateUrl: './commandslistecomponents.component.html',
  styleUrls: ['./commandslistecomponents.component.css']
})
export class CommandslistecomponentsComponent {
  contacts: any;
  Organisationrepresentative = localStorage.getItem("id");
  constructor(private sharedservice: SharedserviceService,private router:Router) {}
  ngOnInit(): void {
    this.loadorders();
  }
  loadorders(){
    this.sharedservice.getListCommandebyOrganisationRepresantative(this.Organisationrepresentative).subscribe((data)=>{
      this.contacts = data;
    })
  }
  GoTodetailspage(id:any){
    localStorage.setItem("id",id);
    this.router.navigate(['/listedesitemsinpanier', id]);

  }
}
