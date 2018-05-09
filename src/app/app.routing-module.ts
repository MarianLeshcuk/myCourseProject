import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './autorization/sign-in/sign-in.component';
import { SignUpComponent } from './autorization/sign-up/sign-up.component';
import { RoleGuard } from './services/autorization.service';
import { ChatComponent } from './chat/chat.component';


export const routes: Routes = [
  {path: 'signIn', component: SignInComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'cabinet', component: ChatComponent, canActivate: [RoleGuard]}
];

// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes)
//   ],
//   providers: [RoleGuard],
//   exports: [
//     RouterModule
//   ]
// })

// export class AppRoutingModule {

// }