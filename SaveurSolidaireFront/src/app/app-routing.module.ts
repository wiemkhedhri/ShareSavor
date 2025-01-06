import { CommandslistecomponentsComponent } from './components/commandslistecomponents/commandslistecomponents.component';
import { PaypalButtonComponent } from './components/paypal-button/paypal-button.component';
import { LogSignInCompoenentComponent } from './components/log-sign-in-compoenent/log-sign-in-compoenent.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { UpdateprofileComponent } from './components/updateprofile/updateprofile.component';
import { AddBuissinFormComponent } from './components/add-buissin-form/add-buissin-form.component';
import { CurrentBuisinessComponent } from './components/current-buisiness/current-buisiness.component';
import { AddPublicationComponent } from './components/add-publication/add-publication.component';
import { ListepublicationComponent } from './components/listepublication/listepublication.component';
import { ShopByBuisinessComponent } from './components/shop-by-buisiness/shop-by-buisiness.component';
import { ItemsPerBuisinessComponent } from './components/items-per-buisiness/items-per-buisiness.component';
import { SingleproductComponent } from './components/singleproduct/singleproduct.component';
import { AllItemsComponent } from './components/all-items/all-items.component';
import { AddorganisationComponent } from './components/addorganisation/addorganisation.component';
import { CurrentOrganisationComponent } from './components/current-organisation/current-organisation.component';
import { CartComponent } from './components/cart/cart.component';
import { UpdateprofileorganisationComponent } from './components/updateprofileorganisation/updateprofileorganisation.component';
import { ContactcomponentComponent } from './components/contactcomponent/contactcomponent.component';
import { ListemessagescomponentComponent } from './components/listemessagescomponent/listemessagescomponent.component';
import { CommandslistepanieritemcomponentsComponent } from './components/commandslistepanieritemcomponents/commandslistepanieritemcomponents.component';

const routes: Routes = [
 // { path: '', redirectTo: '/home', pathMatch: 'full' } ,
  {path:'' , component:HomeComponent,children:[
   {path:'' , component:AcceuilComponent} ,
   {path:'authentification' , component: AuthenticationComponent} ,
   {path:'updateprofile',component:UpdateprofileComponent} ,
   {path:'addbuissines',component:AddBuissinFormComponent} ,
   {path:'currentbuisiness',component:CurrentBuisinessComponent} ,
   {path:'addpublication', component:AddPublicationComponent} ,
   {path:'listepublisationbuisiness' , component:ListepublicationComponent} ,
   {path:'shopByBuisiness' , component:ShopByBuisinessComponent} ,
   {path:'itemByBuisiness',component:ItemsPerBuisinessComponent} ,
   {path:'singleProduct' ,  component:SingleproductComponent} ,
   {path:'allitems',component:AllItemsComponent} ,
   {path:'addOrganisation' , component:AddorganisationComponent} ,
   {path:'currentOrganisation',component:CurrentOrganisationComponent} ,
   {path:'cart',component:CartComponent},
   {path:'paiement',component:PaypalButtonComponent},
   {path:'updateorganisationrepresantative',component:UpdateprofileorganisationComponent},
   {path:'contact',component:ContactcomponentComponent} ,
   {path:'listemessage',component:ListemessagescomponentComponent},
   {path:'listCommandeOrganisation',component:CommandslistecomponentsComponent},
   {path:'listedesitemsinpanier/:id',component:CommandslistepanieritemcomponentsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
