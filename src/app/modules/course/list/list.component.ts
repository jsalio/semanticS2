import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseService } from '../../../services/firebase.service';
import { Router } from '@angular/router';
import { DataTableResource } from 'angular5-data-table';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  course: any;
  courses: any[];
  cols: any[];

  constructor(
    private db: AngularFireDatabase,
    private fireServ: FirebaseService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cols = [
      { header: 'title', field: 'title' },
      { header: 'description', field: 'description' },
      { header: 'Web reference', field: 'url' },
      { header: 'action', field: '' }
    ];
    this.fireServ.node = 'courses';
    this.fireServ.getElementList().subscribe(data => {
      this.courses = data;
    });
  }

  addNewCourse() {
    this.router.navigate(['course/addnew']);
  }

  getCourseUrl(urlCourse: string): string {
    return urlCourse.replace(/ /g, '_');
  }
}
