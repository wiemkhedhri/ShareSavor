import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-authentificationcomponent',
  templateUrl: './authentificationcomponent.component.html',
  styleUrls: ['./authentificationcomponent.component.css']
})
export class AuthentificationcomponentComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,private authservice:AuthserviceService , private router:Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {

this.authservice.Login(this.loginForm.value).subscribe((data)=>{
  localStorage.setItem("token",data.token) ;
  localStorage.setItem("email",data.loginUserDto.email) ;
  localStorage.setItem("role",data.loginUserDto.role) ;
  localStorage.setItem("id",data.loginUserDto.id)
  localStorage.setItem("currentUserstate","1") ;
  this.router.navigateByUrl('/acceuil');
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Logged In Successfully ",
    showConfirmButton: false,
    timer: 1500
  })
  ;
} ,(error)=>{
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Check Your Data!",

  });
}
)

    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Check Your Inputs!",

      });
    }
  }
  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
}
