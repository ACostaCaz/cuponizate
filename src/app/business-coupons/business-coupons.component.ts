import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Coupon } from '../interfaces/coupon.interface';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-business-coupons',
  templateUrl: './business-coupons.component.html',
  styleUrls: ['./business-coupons.component.css']
})
export class BusinessCouponsComponent implements OnInit {
  coupons!: Coupon[];
  constructor(private readonly afs: AngularFirestore, private AuthService: AuthService) {}
  ngOnInit() {
    this.businessCoupons().then(coupon => {
      console.log(coupon)
      this.coupons = coupon
    })
  }

  businessCoupons() {
   return new Promise<any>((resolve) => {
    console.log(this.AuthService.getUid())
    this.afs.collection('coupons', ref => ref.where('user_id', '==', this.AuthService.getUid()))
    .valueChanges()
    .subscribe(coupon => resolve(coupon))
   })
  }
}
