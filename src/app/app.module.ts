import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
import { NavbarComponent } from './navbar/navbar.component';
import { IndexComponent } from './index/index.component';
import { environment } from '../environments/environment';


import { AngularFireAuthModule} from '@angular/fire/compat/auth'
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';

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
    ProfileManagementComponent,
    NavbarComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule, AngularFirestoreModule 
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
