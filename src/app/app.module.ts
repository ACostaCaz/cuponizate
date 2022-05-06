import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreateCouponComponent } from './create-coupon/create-coupon.component';
import { EditCouponComponent } from './edit-coupon/edit-coupon.component';
import { BusinessCouponsComponent } from './business-coupons/business-coupons.component';
import { CouponComponent } from './coupon/coupon.component';
import { BusinessProfileComponent } from './business-profile/business-profile.component';
import { ProfileManagementComponent } from './profile-management/profile-management.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CreateCouponComponent,
    EditCouponComponent,
    BusinessCouponsComponent,
    CouponComponent,
    BusinessProfileComponent,
    ProfileManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
