import { BuissinesRepresentativeServService } from 'src/app/services/buisinesRepresentativeService/buissines-representative-serv.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BuisinessserviceService } from 'src/app/services/buisinessservice/buisinessservice.service';

@Component({
  selector: 'app-headerbuisinesrep',
  templateUrl: './headerbuisinesrep.component.html',
  styleUrls: ['./headerbuisinesrep.component.css']
})
export class HeaderbuisinesrepComponent {
  IsChecked!:Boolean ;
  checkexists!:Boolean ;
idrepresentative=localStorage.getItem("id") ;
emailrepresentetive = localStorage.getItem("email")
buisiness!:any ;
constructor(private buisnesservice:BuisinessserviceService ,private buisinesrepserice:BuissinesRepresentativeServService, private router:Router){}
ngOnInit() {
this.checkBuisiness() ;
}
checkBuisiness(){
this.buisinesrepserice.FindByEmail(this.emailrepresentetive).subscribe((data)=>{
  this.buisiness = data  ;
  console.log("data", data)

    if(this.buisiness.entreprise==null){
      this.checkexists=false ;
      this.IsChecked=true ;

    }
    else
    if(this.buisiness.entreprise != null)

    {

      this.checkexists=true ;
      this.IsChecked=false ;


    }
})




/*
  this.buisnesservice.findByRepresentative(this.idrepresentative).subscribe((data)=>{
    this.buisiness = data  ;

    if(this.buisiness.id=this.idrepresentative){
        this.checkexists=true ;
      this.IsChecked=false ;
    }
    else
    if(this.buisiness.id=null)
    {
      this.checkexists=false ;
      this.IsChecked=true ;
    }
  })*/
}
signout(){


  this.router.navigateByUrl('/authentification')
  localStorage.clear() ;

}

}
