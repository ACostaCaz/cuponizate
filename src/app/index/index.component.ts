import { Component } from '@angular/core';
import { CouponsService } from '../services/coupons.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Coupon } from '../interfaces/coupon.interface';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent{
  private couponsCollection: AngularFirestoreCollection<Coupon>;
  coupons: Observable<Coupon[]>;
  constructor(private readonly afs: AngularFirestore, private AuthService: AuthService) {
    this.couponsCollection = afs.collection<Coupon>('coupons');
    this.coupons = this.couponsCollection.valueChanges();
  }

}
