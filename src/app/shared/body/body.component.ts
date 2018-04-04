import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  title = 'app';

  coursesObservable: Observable<any[]>;
  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.coursesObservable = this.getCourses('/courses');
  }
  getCourses(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

}
