import { UserService } from './../../services/user/user.service';
import { Component ,OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'] ,


})
export class AuthenticationComponent implements OnInit {
  isSignUp: boolean = false;
  LogInForm!: FormGroup;
  signInForm!: FormGroup;
  fileToUpload: Array<File> = [];

  constructor(private fb: FormBuilder , private userservice:UserService  , private router:Router ) {}

  ngOnInit() {
    this.LogInForm = this.fb.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

    this.signInForm = this.fb.group({
      fullName: ['', [Validators.required]] ,
      email: ['', [Validators.required, Validators.email]],
      numerotelephone: ['', [Validators.required  ]] ,
      role: ['', [Validators.required]] ,
      password: ['', [Validators.required, Validators.minLength(6)]] ,
      file:['' ,Validators.required]
    });


  }
  Register(){
    if (this.signInForm.invalid)
    {
      Swal.fire({
        icon: "error",
        title: "Check your Data",
      });
    }
    else {
      let formData = new FormData();

      formData.append('fullName', this.signInForm.value.fullName);
      formData.append('email', this.signInForm.value.email);
      formData.append('numerotelephone', this.signInForm.value.numerotelephone);
      formData.append('role', this.signInForm.value.role);
      formData.append('password', this.signInForm.value.password);
      formData.append('file', this.fileToUpload[0]);



   this.userservice.Register(formData).subscribe((data)=>{

    Swal.fire({
      title: "Success!",
      text: "Registered Successfully!",
      icon: "success"
    });


   })
   this.signInForm.reset() ;
    }



  }
  handleFileInput(files: any) {

    this.fileToUpload = <Array<File>>files.target.files;
      // this.imgchecked = true ;
    }
    logIn(){

if(this.LogInForm.invalid){
  Swal.fire({
    icon: "error",
    title: "Check your Data",
  });
}
else
{

  this.userservice.Login(this.LogInForm.value).subscribe((data)=>{
    localStorage.setItem("token",data.token) ;
    localStorage.setItem("email",data.loginUserDto.email) ;
    localStorage.setItem("role",data.loginUserDto.role) ;
    localStorage.setItem("id",data.loginUserDto.id)
    localStorage.setItem("currentUserstate","1") ;
    this.LogInForm.reset() ;
    Swal.fire({
      title: "Success!",
      text: "Loged IN Successfully!",
      icon: "success"
    });



if(data.loginUserDto['role']=='BUISINESSREPRENSETIVE'){
this.router.navigateByUrl('/updateprofile')

}
else
if(data.loginUserDto['role']=='ORGANISATIONREPRESENTATIVE')
{

this.router.navigateByUrl('')
}

  }
  ,(error)=>{
    Swal.fire({
      icon: "error",
      title: "Check your Data",
    });
  }
  )


}
       }

}
