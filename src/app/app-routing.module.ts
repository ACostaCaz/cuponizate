import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreateCouponComponent } from './create-coupon/create-coupon.component';
import { EditCouponComponent } from './edit-coupon/edit-coupon.component';
import { BusinessCouponsComponent } from './business-coupons/business-coupons.component';
import { CouponComponent } from './coupon/coupon.component';
import { BusinessProfileComponent } from './business-profile/business-profile.component';
import { ProfileManagementComponent } from './profile-management/profile-management.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: '', component: IndexComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  { path: 'editCoupon', component: EditCouponComponent, pathMatch: 'full' },
  { path: 'mycoupons', component: BusinessCouponsComponent, pathMatch: 'full' },
  { path: 'createcoupon', component: CreateCouponComponent, pathMatch: 'full' },
  { path: 'coupon', component: CouponComponent, pathMatch: 'full' },
  { path: 'businessprofile', component: BusinessProfileComponent, pathMatch: 'full' },
  { path: 'profilemanagement', component: ProfileManagementComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
