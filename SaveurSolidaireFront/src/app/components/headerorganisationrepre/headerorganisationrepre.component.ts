import { Router } from '@angular/router';
import { OrganisationRepresentativeserviceService } from './../../services/organisationRepresentative/organisation-representativeservice.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-headerorganisationrepre',
  templateUrl: './headerorganisationrepre.component.html',
  styleUrls: ['./headerorganisationrepre.component.css']
})
export class HeaderorganisationrepreComponent {
  CurrentUserState=localStorage.getItem("currentUserstate") ;
role=localStorage.getItem("role") ;
id= localStorage.getItem("id") ;

IsChecked!:Boolean ;
checkexists!:Boolean ;
organisarepresen:any;
constructor(private OrganisationRepresentat:OrganisationRepresentativeserviceService,private router:Router) {
   this.CurrentUserState ;
  this.role ; }
  ngOnInit(): void {
this.GetById() ;
  }
  GetById(){
    this.OrganisationRepresentat.GetById(this.id).subscribe((data)=>{
this.organisarepresen = data ;
if(this.organisarepresen.organisation==null){
  this.checkexists=false ;
  this.IsChecked=true ;
}
else
if(this.organisarepresen.organisation != null)

{
  this.checkexists=true ;
  this.IsChecked=false ;
}
    })
  }
  signout(){
    this.router.navigateByUrl('/authentification')
    localStorage.clear() ;

  }

}
