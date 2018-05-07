import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './autorization/sign-in/sign-in.component';
import { SignUpComponent } from './autorization/sign-up/sign-up.component';
import { MainComponent } from './main/main.component';
import { ChatComponent } from './main/chat/chat.component';
import { RoleGuard } from './services/autorization.service';
// import { MainComponent } from './main/main.component';

const routes: Routes = [
  // {path: '', component: MainComponent},
  {path: 'signIn', component: SignInComponent, outlet: 'autorization'},
  {path: 'signUp', component: SignUpComponent, outlet: 'autorization'},
  {path: '**',    component: MainComponent },
  {path: 'chat', component: ChatComponent, outlet: 'chat', canActivate: [RoleGuard]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [RoleGuard],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}