import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BuisinessserviceService } from 'src/app/services/buisinessservice/buisinessservice.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent {
  firsttwolist:any ;
  lasttwolist:any ;
constructor(private buisinessservice:BuisinessserviceService ,private sanitizer: DomSanitizer){}
ngOnInit(){

  this.getfirsttwo() ;
  this.getlasttwo();
}
getfirsttwo(){
this.buisinessservice.getfirsttwo().subscribe((data)=>{
  this.firsttwolist = data ;
})
}
getSanitizedUrl(image: string) {
  return this.sanitizer.bypassSecurityTrustStyle(`url('http://localhost:8081/fileController/files/${image}')`);
}

getlasttwo(){
  this.buisinessservice.getLasttwo().subscribe((data)=>{
    this.lasttwolist = data ;
  })
}
}
