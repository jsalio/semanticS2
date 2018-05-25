import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../../services/firebase.service';
import { Router } from '@angular/router';
import { Activity } from '../../../models/activity';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  activities: Activity[];
  loaded = false;
  cols: any;

  constructor(private fireservices: FirebaseService, private route: Router) {
    this.cols = [
      { header: 'name', field: 'name' },
      { header: 'Price', field: 'price' },
      { header: 'Recurrent', field: 'recurrent' },
      { header: 'action', field: '' }
    ];
    this.fireservices.node = 'Activity';
  }

  ngOnInit() {
    this.fireservices.getElementList().subscribe(data => {
      this.activities = data;
      this.loaded = true;
      console.log(this.activities);
    });
  }

  goToNew(): void {
    this.route.navigate(['activity/new']);
  }

  buildUrl(name: string): string {
   return name.replace(/ /g, '_');
  }
}
