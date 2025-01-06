import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrganisationserviceService } from 'src/app/services/organisation/organisationservice.service';
import { OrganisationRepresentativeserviceService } from 'src/app/services/organisationRepresentative/organisation-representativeservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updateprofileorganisation',
  templateUrl: './updateprofileorganisation.component.html',
  styleUrls: ['./updateprofileorganisation.component.css']
})
export class UpdateprofileorganisationComponent {
  role=localStorage.getItem("role")
  id = localStorage.getItem("id")
  user:any ;
  UpdateForm!:FormGroup;
  fileToUpload:Array<File>=[] ;
  UpdateImage!:FormGroup ;
  constructor(private organisationrepservice:OrganisationRepresentativeserviceService , private fb:FormBuilder){}
ngOnInit(){
this.UpdateForm = this.fb.group({
  fullName:['',Validators.required] ,
  numerotelephone:['' , Validators.required]  ,
  email:['',Validators.required]
})
this.UpdateImage= this.fb.group({
  file:['' , Validators.required]
})
this.getUserLogged() ;

}
getUserLogged(){
if(this.role=="ORGANISATIONREPRESENTATIVE"){
this.organisationrepservice.GetById(this.id).subscribe((data:any)=>{
 this.user = data
 console.log(data)
 this.UpdateForm.patchValue(data)
})
}
}

handleFileInput(files: any) {
  this.fileToUpload = <Array<File>>files.target.files;
  console.log(this.fileToUpload)
}
updateimages(){
  let formData = new FormData() ;
  formData.append('file',this.fileToUpload[0])

this.organisationrepservice.updateimages(this.id,formData).subscribe((data)=>{

  localStorage.setItem("currentuser", JSON.stringify(data));
  this.user= data ;
  Swal.fire({
    title: "Success!",
    text: "Updated Successfully!",
    icon: "success"
  });
        window.location.reload()
})
}

updateprofile(){
  this.organisationrepservice.updaterepresentative(this.id,this.UpdateForm.value).subscribe((data)=>{
    Swal.fire({
      title: "Success!",
      text: "Updated Successfully!",
      icon: "success"
    });
    this.user = data ;
  })
}

}
