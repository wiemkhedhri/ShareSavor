import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarcomponentComponent } from './components/sidebarcomponent/sidebarcomponent.component';
import { AcceuilcomponentsComponent } from './components/acceuilcomponents/acceuilcomponents.component';
import { HomecomponentComponent } from './components/homecomponent/homecomponent.component';
import { AuthentificationcomponentComponent } from './components/authentificationcomponent/authentificationcomponent.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';
import { TokeninterceptorServiceService } from './services/tokeninterceptor-service.service';
import { ListepublicationcomponentComponent } from './components/listepublicationcomponent/listepublicationcomponent.component';
import { ProfileComponent } from './components/profile/profile.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarcomponentComponent,
    AcceuilcomponentsComponent,
    HomecomponentComponent,
    AuthentificationcomponentComponent,
    ListepublicationcomponentComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule,FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokeninterceptorServiceService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
