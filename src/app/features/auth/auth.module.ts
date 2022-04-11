import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ForgotComponent } from './forgot/forgot.component';



@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    LogoutComponent,
    ForgotComponent
  ],
  imports: [
    SharedModule
  ]
})
export class AuthModule { }
