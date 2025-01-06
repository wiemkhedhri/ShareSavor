import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogSignInCompoenentComponent } from './components/log-sign-in-compoenent/log-sign-in-compoenent.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderbuisinesrepComponent } from './components/headerbuisinesrep/headerbuisinesrep.component';
import { AddBuissinFormComponent } from './components/add-buissin-form/add-buissin-form.component';
import { UpdateprofileComponent } from './components/updateprofile/updateprofile.component';
import { TokeninterceptorService } from './interceptor/tokeninterceptor.service';
import { CurrentBuisinessComponent } from './components/current-buisiness/current-buisiness.component';
import { AddPublicationComponent } from './components/add-publication/add-publication.component';
import { ListepublicationComponent } from './components/listepublication/listepublication.component';
import { ShopByBuisinessComponent } from './components/shop-by-buisiness/shop-by-buisiness.component';
import { ItemsPerBuisinessComponent } from './components/items-per-buisiness/items-per-buisiness.component';
import { AllItemsComponent } from './components/all-items/all-items.component';
import { SingleproductComponent } from './components/singleproduct/singleproduct.component';
import { HeaderorganisationrepreComponent } from './components/headerorganisationrepre/headerorganisationrepre.component';
import { AddorganisationComponent } from './components/addorganisation/addorganisation.component';
import { CurrentOrganisationComponent } from './components/current-organisation/current-organisation.component';
import { CartComponent } from './components/cart/cart.component';
import { PaypalButtonComponent } from './components/paypal-button/paypal-button.component';
import { PaymentMethosComponent } from './components/payment-methos/payment-methos.component';
import { UpdateprofileorganisationComponent } from './components/updateprofileorganisation/updateprofileorganisation.component';
import { ContactcomponentComponent } from './components/contactcomponent/contactcomponent.component';
import { ListemessagescomponentComponent } from './components/listemessagescomponent/listemessagescomponent.component';
import { CommandslistecomponentsComponent } from './components/commandslistecomponents/commandslistecomponents.component';
import { CommandslistepanieritemcomponentsComponent } from './components/commandslistepanieritemcomponents/commandslistepanieritemcomponents.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    NavbarComponent,
    LogSignInCompoenentComponent,
    HomeComponent,
    FooterComponent,
    AcceuilComponent,
    HeaderbuisinesrepComponent,
    AddBuissinFormComponent,
    UpdateprofileComponent,
    CurrentBuisinessComponent,
    AddPublicationComponent,
    ListepublicationComponent,
    ShopByBuisinessComponent,
    ItemsPerBuisinessComponent,
    AllItemsComponent,
    SingleproductComponent,
    HeaderorganisationrepreComponent,
    AddorganisationComponent,
    CurrentOrganisationComponent,
    CartComponent,
    PaypalButtonComponent,
    PaymentMethosComponent,
    UpdateprofileorganisationComponent,
    ContactcomponentComponent,
    ListemessagescomponentComponent,
    CommandslistecomponentsComponent,
    CommandslistepanieritemcomponentsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
     ReactiveFormsModule,
      FormsModule , HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokeninterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
