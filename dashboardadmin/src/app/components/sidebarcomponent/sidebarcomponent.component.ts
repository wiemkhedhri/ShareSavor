import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-sidebarcomponent',
  templateUrl: './sidebarcomponent.component.html',
  styleUrls: ['./sidebarcomponent.component.css']
})
export class SidebarcomponentComponent {
id=localStorage.getItem("id")
admin:any;
constructor(private authservice:AuthserviceService , private router:Router){

}
ngOnInit(){
this.getadmini()
}
getadmini(){
this.authservice.getbyid(this.id).subscribe((data)=>{
  this.admin=data;
  console.log(data)

})
}
logout(){
  localStorage.clear();
this.router.navigateByUrl('')
}
}
