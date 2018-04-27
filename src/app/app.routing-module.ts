import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './autorization/sign-in/sign-in.component';
import { SignUpComponent } from './autorization/sign-up/sign-up.component';

const routes: Routes = [
  {path: 'signIn', component: SignInComponent},
  {path: 'signUp', component: SignUpComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}