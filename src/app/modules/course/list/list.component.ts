import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseService } from '../../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  course: any;
  courses: any[];
  cols: any[];
  loading: boolean;

  constructor(
    private db: AngularFireDatabase,
    private fireServ: FirebaseService,
    private router: Router
  ) {
    this.loading = true;
  }

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
      this.loading = false;
    });
  }

  addNewCourse() {
    this.router.navigate(['course/addnew']);
  }

  getCourseUrl(urlCourse: string): string {
    return urlCourse.replace(/ /g, '_');
  }
}
