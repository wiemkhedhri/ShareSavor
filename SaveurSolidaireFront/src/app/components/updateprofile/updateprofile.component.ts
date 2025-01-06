import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BuissinesRepresentativeServService } from 'src/app/services/buisinesRepresentativeService/buissines-representative-serv.service';
import { BuisinessserviceService } from 'src/app/services/buisinessservice/buisinessservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent {

role=localStorage.getItem("role")
id = localStorage.getItem("id")
user:any ;
UpdateForm!:FormGroup ;
fileToUpload:Array<File>=[] ;
UpdateImage!:FormGroup ;
constructor(private buirepresen:BuissinesRepresentativeServService , private fb:FormBuilder){}
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
if(this.role=="BUISINESSREPRENSETIVE"){
this.buirepresen.getById(this.id).subscribe((data)=>{
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

this.buirepresen.updateimages(this.id,formData).subscribe((data)=>{

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
  this.buirepresen.updaterepresentative(this.id,this.UpdateForm.value).subscribe((data)=>{
    Swal.fire({
      title: "Success!",
      text: "Updated Successfully!",
      icon: "success"
    });
    this.user = data ;
  })
}


}
