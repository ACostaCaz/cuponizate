import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import {businessProfile} from '../interfaces/business-profile.interface';
@Component({
  selector: 'app-business-profile',
  templateUrl: './business-profile.component.html',
  styleUrls: ['./business-profile.component.css']
})
export class BusinessProfileComponent implements OnInit {
  profile!: businessProfile
  constructor(private route: ActivatedRoute,private readonly afs: AngularFirestore) {
    
  }

 ngOnInit() {
   let id = this.route.snapshot.params['id'];
   this.buProfile(id).then(profile => {
     this.profile = profile[0]
    
    })
   console.log(id)
 }

 buProfile(id: string) {
   return new Promise<any>((resolve) => {
    this.afs.collection('profiles', ref => ref.where('id', '==', id))
    .valueChanges()
    .subscribe(profile => resolve(profile))
   })
  }

}
