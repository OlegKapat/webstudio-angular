import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { MenucomponentComponent } from './menucomponent/menucomponent.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ChooseusComponent } from './chooseus/chooseus.component';
import { FooterComponent } from './footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ParallaxComponent } from './parallax/parallax.component';
import { RegistrationComponent } from './registration/registration.component';
import { EmailComponent } from './email/email.component';
import { TotalskillComponent } from './skills/totalskill/totalskill.component';



@NgModule({
  declarations: [
    AppComponent,
    MenucomponentComponent,
    MainpageComponent,
    ChooseusComponent,
    FooterComponent,
    ParallaxComponent,
    RegistrationComponent,
    EmailComponent,
    TotalskillComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
