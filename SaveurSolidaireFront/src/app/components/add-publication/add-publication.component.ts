import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PublicationserviceService } from 'src/app/services/publication/publicationservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-publication',
  templateUrl: './add-publication.component.html',
  styleUrls: ['./add-publication.component.css']
})
export class AddPublicationComponent {
  imageUrl: string | ArrayBuffer | null = null;
  isDragOver = false;
  AddForm!:FormGroup ;
  FileToUpload!:File ;
  idrepresentateur=localStorage.getItem("id")
  constructor(private fb:FormBuilder , private publicationservice:PublicationserviceService , private router:Router){}

  ngOnInit() {
this.AddForm = this.fb.group({
  aliment:['' , Validators.required] ,
  datepublication:['' , Validators.required] ,
  date_expiration:['' , Validators.required] ,
  quantitedisponible:['' , Validators.required] ,
  prix_unitaire:['' , Validators.required] ,
  file:['' , Validators.required] ,
})
  }


  savePublciation(){
    if(this.AddForm.invalid){
      Swal.fire({
        icon: "error",
        title: "Check your Data",
      });
     }else{
      let formData = new FormData();
      formData.append('aliment', this.AddForm.value.aliment);
      formData.append('datepublication', this.AddForm.value.datepublication);
      formData.append('date_expiration', this.AddForm.value.date_expiration);
      formData.append('quantitedisponible', this.AddForm.value.quantitedisponible);
      formData.append('prix_unitaire', this.AddForm.value.prix_unitaire);
      formData.append('file',  this.FileToUpload);
this.publicationservice.SavePublication(formData , this.idrepresentateur).subscribe((data)=>{
  Swal.fire({
    title: "Success!",
    text: "Added Successfully!",
    icon: "success"
  });
})


     }
     this.router.navigateByUrl('/listepublisationbuisiness')
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
