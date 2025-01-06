import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrganisationserviceService } from 'src/app/services/organisation/organisationservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addorganisation',
  templateUrl: './addorganisation.component.html',
  styleUrls: ['./addorganisation.component.css']
})
export class AddorganisationComponent {
  imageUrl: string | ArrayBuffer | null = null;
  isDragOver = false;
  AddForm!:FormGroup ;
  FileToUpload!:File ;
  id=localStorage.getItem("id") ;
  emailRepresentativeLocal2!:any ;
  constructor(private fb:FormBuilder  , private router:Router, private organisationservice:OrganisationserviceService){
    this.id=localStorage.getItem("id") ;

  }

  ngOnInit() {
this.AddForm = this.fb.group({
  email:['',[Validators.required,Validators.email]] ,
  name:['',Validators.required],
  numerotel:['',Validators.required] ,
  file:['',Validators.required] ,
  location:['',Validators.required],
})
  }

  SaveOrganisation(){
 if(this.AddForm.invalid){
  console.log(this.AddForm.value)
  Swal.fire({
    icon: "error",
    title: "Check your Data",
  });
 }else{
  let formData = new FormData();
  formData.append('name', this.AddForm.value.name);
  formData.append('email', this.AddForm.value.email);
  formData.append('numerotel', this.AddForm.value.numerotel);
  formData.append('location', this.AddForm.value.location);
  formData.append('file', this.FileToUpload);


  this.organisationservice.saveOrganisation(formData , this.id).subscribe((data:any)=>{

    this.AddForm.reset();
    Swal.fire({
      title: "Success!",
      text: "Added Successfully!",
      icon: "success"
    });
    this.router.navigateByUrl('currentOrganisation')
  })
 }
}


  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.FileToUpload =  input.files[0]
      this.previewImage(file);
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = false;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = false;

    if (event.dataTransfer && event.dataTransfer.files.length > 0) {
      const file = event.dataTransfer.files[0];
      this.previewImage(file);
    }
  }

  private previewImage(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl = reader.result;
    };
    reader.readAsDataURL(file);
  }

}
