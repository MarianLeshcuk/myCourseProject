import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AutorizationComponent } from './autorization/autorization.component';
import { SignInComponent } from './autorization/sign-in/sign-in.component';
import { SignUpComponent } from './autorization/sign-up/sign-up.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { MainDirective } from './main/main.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule, MatButtonModule, MatCardModule, MatFormFieldModule } from '@angular/material';
import { RoleGuard } from './services/autorization.service';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing-module';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from '@angular/forms';
import { TaskService } from './services/task.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AutorizationComponent,
    SignInComponent,
    SignUpComponent,
    MainComponent,
    FooterComponent,
    MainDirective,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RoleGuard, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
