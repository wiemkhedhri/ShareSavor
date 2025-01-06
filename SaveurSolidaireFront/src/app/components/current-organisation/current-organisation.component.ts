import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrganisationserviceService } from 'src/app/services/organisation/organisationservice.service';
import { PanierserviceService } from 'src/app/services/panier/panierservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-current-organisation',
  templateUrl: './current-organisation.component.html',
  styleUrls: ['./current-organisation.component.css']
})
export class CurrentOrganisationComponent {
  idrepresentative=localStorage.getItem("id") ;
  organisation!:any ;
  image!:any;
  imagesrc!:any;
  editForm!:FormGroup ;
  constructor(private fb:FormBuilder,private organisationService:OrganisationserviceService , private panierservice:PanierserviceService) { }

  ngOnInit() {
    this.editForm = this.fb.group({
      name:['',Validators.required] ,
      description :['',Validators.required] ,
      email :['',Validators.required] ,
      location :['',Validators.required] ,
      numerotel :['',Validators.required] ,
    })
    this.CurrentBuiss();
    }
  CurrentBuiss(){

    this.organisationService.FindByOrganisationRepresentative(this.idrepresentative).subscribe((data)=>{
      this.organisation = data  ;
     console.log("data"  , this.organisation)
     this.imagesrc="http://localhost:8081/fileController/files/"+this.organisation.image

     this.getPanierByOrganisation(this.organisation.id)
          })


  }

  getPanierByOrganisation(id:any){
  this.panierservice.getByOrganisationId(id).subscribe((data:any)=>{
 localStorage.setItem("panierId",data.id)
  })
  }

  patchvalue(){
    this.editForm.patchValue(this.organisation)
  }
  updatebuisiness(){
    this.organisationService.updateOrganisation(this.organisation.id ,this.editForm.value).subscribe((data)=>{
      Swal.fire({
        title: "Success!",
        text: "Updated Successfully!",
        icon: "success"
      });
      this.dismissModal() ;
      this.CurrentBuiss();
      window.location.reload() ;

    })
  }
  dismissModal() {
    const modalElement = document.getElementById('exampleModal');
    if (modalElement) {
      modalElement.classList.remove('show'); // Remove 'show' class
      modalElement.style.display = 'none'; // Set display to none
      modalElement.setAttribute('aria-hidden', 'true'); // Set aria-hidden to true
    }
  }

}
