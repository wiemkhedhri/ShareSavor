import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-listepublicationcomponent',
  templateUrl: './listepublicationcomponent.component.html',
  styleUrls: ['./listepublicationcomponent.component.css']
})
export class ListepublicationcomponentComponent {
publciationlist:any ;
constructor(private sharedservice:SharedService){}
  ngOnInit(){
    this.getallpublication();
  }
  getallpublication(){
this.sharedservice.getallPublication().subscribe((data)=>{
  this.publciationlist=data;
  console.log(data);
})
  }
}
