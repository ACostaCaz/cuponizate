import { Component, OnInit } from '@angular/core';
import { profileService } from '../services/profile.service';
import {AuthService} from '../services/auth.service';
@Component({
  selector: 'app-profile-management',
  templateUrl: './profile-management.component.html',
  styleUrls: ['./profile-management.component.css']
})
export class ProfileManagementComponent implements OnInit {
  name!: string;
  address!: string;
  category!: string;
  monday!: string;
  tuesday!: string;
  wednesday!: string;
  thursday!: string;
  friday!: string;
  saturday!: string;
  sunday!: string;
  constructor(private profileService: profileService, private AuthService: AuthService) { }

  ngOnInit(): void {
  }
  createProfile() {
    this.profileService.create({
      id: this.AuthService.getUid(),
      address: this.address,
      name: this.name,
      monday: this.monday,
      tuesday: this.tuesday,
      wednesday: this.wednesday,
      thursday: this.thursday,
      friday: this.friday,
      saturday: this.saturday,
      sunday: this.sunday
    })
  }

}
