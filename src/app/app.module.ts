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
import { PortfolioComponent } from './portfolio/portfolio.component';
import { IsotopComponent } from './portfolio/isotop/isotop.component';
import { TeamComponent } from './team/team.component';
import { OurserviceComponent } from './ourservice/ourservice.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { OrderComponent } from './ourservice/order/order.component';
import { AgmCoreModule } from '@agm/core';
import { ContactformComponent } from './contact/contactform/contactform.component';
import {AccordionModule} from 'primeng/accordion';
import {SendmailService} from './shared/sendmail.service';
import {SendMessageService } from './shared/send-message.service';



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
    PortfolioComponent,
    IsotopComponent,
    TeamComponent,
    OurserviceComponent,
    BlogComponent,
    ContactComponent,
    OrderComponent,
    ContactformComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA7V3DmACVaf_dfuwOTkRpdQKIxPO4l_8Y'
    }),
    AccordionModule
  ],
    

  providers: [SendmailService,SendMessageService ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
