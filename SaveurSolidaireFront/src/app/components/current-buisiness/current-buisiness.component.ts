import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BuisinessserviceService } from 'src/app/services/buisinessservice/buisinessservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-current-buisiness',
  templateUrl: './current-buisiness.component.html',
  styleUrls: ['./current-buisiness.component.css']
})
export class CurrentBuisinessComponent {
  idrepresentative=localStorage.getItem("id") ;
  buisiness!:any ;
  image!:any;
  imagesrc!:any;
  editForm!:FormGroup ;
  constructor(private buisnesservice:BuisinessserviceService  , private fb:FormBuilder , private router:Router) {

  }
  ngOnInit() {
    this.editForm = this.fb.group({
      name:['',Validators.required] ,
      email :['',Validators.required] ,
      location :['',Validators.required] ,
      numerotel :['',Validators.required] ,
      description :['',Validators.required] ,
    })
    this.CurrentBuiss();
    }
    CurrentBuiss(){
      this.buisnesservice.findByRepresentative(this.idrepresentative).subscribe((data)=>{
        this.buisiness = data  ;
       console.log("data"  , this.buisiness)
       this.imagesrc="http://localhost:8081/fileController/files/"+this.buisiness.image
            })
    }
    patchvalue(){
      this.editForm.patchValue(this.buisiness)
    }
    updatebuisiness(){
      this.buisnesservice.UpdateBuisiness(this.editForm.value, this.buisiness.id).subscribe((data)=>{

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

