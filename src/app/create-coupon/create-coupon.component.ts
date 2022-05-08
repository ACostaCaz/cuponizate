import { Component } from '@angular/core';
import { CouponsService } from '../services/coupons.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-create-coupon',
  templateUrl: './create-coupon.component.html',
  styleUrls: ['./create-coupon.component.css']
})
export class CreateCouponComponent {
  name!: string;
  ogCost!: string;
  discounted!: string;
  description!: number;
  constructor(private couponsService: CouponsService, private auth: AuthService) { }

  createCoupon() {
    this.couponsService.create({
      name: this.name,
      ogCost: this.ogCost,
      discounted: this.discounted,
      description: this.description,
      user_id: this.auth.getUid()
    })
  }

}
