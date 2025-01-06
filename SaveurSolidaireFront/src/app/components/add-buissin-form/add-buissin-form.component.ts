import { Router } from '@angular/router';
import { BuisinessserviceService } from './../../services/buisinessservice/buisinessservice.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BuissinesRepresentativeServService } from 'src/app/services/buisinesRepresentativeService/buissines-representative-serv.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-buissin-form',
  templateUrl: './add-buissin-form.component.html',
  styleUrls: ['./add-buissin-form.component.css']
})
export class AddBuissinFormComponent {
  imageUrl: string | ArrayBuffer | null = null;
  isDragOver = false;
  AddForm!:FormGroup ;
  FileToUpload!:File ;
  emailRepresentativeLocal=localStorage.getItem("email") ;
  emailRepresentativeLocal2!:any ;
  constructor(private fb:FormBuilder  , private router:Router, private buisinessservice:BuisinessserviceService , private buissnesrepsenta:BuissinesRepresentativeServService){

  }

  ngOnInit() {
this.AddForm = this.fb.group({
  email:['',[Validators.required,Validators.email]] ,
  numerotel:['',Validators.required] ,
  file:['',Validators.required] ,
  type:['',Validators.required] ,
  location:['',Validators.required],
  name:['',Validators.required]

})

this.buissnesrepsenta.FindByEmail(this.emailRepresentativeLocal).subscribe((data)=>{
  this.emailRepresentativeLocal2=data ;
  console.log(data)
})




  }

SaveBuisiness(){
 if(this.AddForm.invalid){
  Swal.fire({
    icon: "error",
    title: "Check your Data",
  });
 }else{
  let formData = new FormData();
  formData.append('name', this.AddForm.value.name);
  formData.append('email', this.AddForm.value.email);
  formData.append('numerotel', this.AddForm.value.numerotel);
  formData.append('type', this.AddForm.value.type);
  formData.append('location', this.AddForm.value.location);
  formData.append('file', this.FileToUpload);
  formData.append('id', this.emailRepresentativeLocal2.id);

  this.buisinessservice.saveBuisiness(formData , this.emailRepresentativeLocal2).subscribe((data)=>{
    this.AddForm.reset();
    Swal.fire({
      title: "Success!",
      text: "Added Successfully!",
      icon: "success"
    });
    this.router.navigateByUrl('currentbuisiness')
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
