import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedserviceService } from 'src/app/services/shared/sharedservice.service';

@Component({
  selector: 'app-commandslistepanieritemcomponents',
  templateUrl: './commandslistepanieritemcomponents.component.html',
  styleUrls: ['./commandslistepanieritemcomponents.component.css']
})
export class CommandslistepanieritemcomponentsComponent {
  id: any;
  detailsData: any;
  contacts:any;
  constructor(private route: ActivatedRoute ,private sharedservice:SharedserviceService) {}

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');
    this.getallitems()
  }
  getallitems(){
 this.sharedservice.getitemsbycommande(parseInt(this.id)).subscribe((data)=>{
  this.contacts = data ;
 })
}
}
