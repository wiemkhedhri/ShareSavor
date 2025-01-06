import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomecomponentComponent } from './components/homecomponent/homecomponent.component';
import { AcceuilcomponentsComponent } from './components/acceuilcomponents/acceuilcomponents.component';
import { AuthentificationcomponentComponent } from './components/authentificationcomponent/authentificationcomponent.component';
import { ListepublicationcomponentComponent } from './components/listepublicationcomponent/listepublicationcomponent.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {path:'',component:AuthentificationcomponentComponent},
  {path:'acceuil',component:HomecomponentComponent,children:[
    {path:'',component:AcceuilcomponentsComponent} ,
    {path:'listpublication',component:ListepublicationcomponentComponent} ,
    {path:'profile',component:ProfileComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
