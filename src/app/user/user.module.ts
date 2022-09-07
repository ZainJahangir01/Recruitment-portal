import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

@NgModule({
  declarations: [LoginComponent, ForgotpasswordComponent],
  imports: [CommonModule, UserRoutingModule],
  exports: [LoginComponent, ForgotpasswordComponent],
})
export class UserModule {}
