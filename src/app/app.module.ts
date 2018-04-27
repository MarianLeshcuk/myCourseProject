import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AutorizationComponent } from './autorization/autorization.component';
import { AppRoutingModule } from './app.routing-module';
import { SignInComponent } from './autorization/sign-in/sign-in.component';
import { SignUpComponent } from './autorization/sign-up/sign-up.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AutorizationComponent,
    SignInComponent,
    SignUpComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
