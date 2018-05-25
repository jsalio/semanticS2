import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../../services/firebase.service';
import { ActivatedRoute, Route } from '@angular/router';
import { Activity } from '../../../models/activity';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})

export class EditComponent implements OnInit {
  activityName: string;
  loaded: boolean;
  searchComplete: boolean;
  currentActivity: Activity;
  activityForm: FormGroup;

  constructor(
    private fireService: FirebaseService,
    private activeRouter: ActivatedRoute,
    private newActivity: FormBuilder,
    private route: Router
  ) {
    this.fireService.node = 'Activity';
    this.searchComplete = false;
    this.createForm();
  }

  ngOnInit() {
    this.activeRouter.params.subscribe(params => {
      this.loaded = true;
      this.currentActivity = new Activity;
      this.activityName = params['id'];
      this.searchData(this.activityName);
    });
  }

  searchData(value: string) {
    this.fireService.searchValue(value).then((snapshot) => {
      this.searchComplete = true;
      this.currentActivity = snapshot.val() as Activity;
      this.setValueForm();
    });
  }

  createForm() {
    this.activityForm = this.newActivity.group({
      name: '',
      price: '',
      recurrent: false
    });
  }

  setValueForm() {
    this.activityForm.setValue({
      name: this.currentActivity.name,
      price: this.currentActivity.price,
      recurrent: this.currentActivity.recurrent
    });
  }

  goToList() {
    this.route.navigate(['activity']);
  }
}
