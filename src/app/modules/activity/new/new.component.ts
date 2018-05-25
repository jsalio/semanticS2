import { Component, OnInit } from '@angular/core';
import { Activity } from '../../../models/activity';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FirebaseService } from '../../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  activity: Activity;
  activityForm: FormGroup;

  constructor(
    private newActivity: FormBuilder,
    private fireServ: FirebaseService,
    private router: Router
  ) {
    this.activity = new Activity;
    this.createForm();
    this.fireServ.node = 'Activity';
  }

  ngOnInit() {}

  postFormData() {
    this.activity = this.activityForm.getRawValue();
    const activityid = this.activity.name.replace(/ /g, '_');
    console.log(activityid);
    this.fireServ.pushOnRef(activityid, this.activity);
    console.log(this.activity);
  }

  createForm() {
    this.activityForm = this.newActivity.group({
      name: '',
      price: '',
      recurrent: false
    });
  }

  goToList() {
    this.router.navigate(['activity']);
  }
}
