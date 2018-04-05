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
  coursesObservable: Observable<any[]>;

  constructor(
    private db: AngularFireDatabase,
    private fireServ: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.fireServ.node = 'courses';
    this.coursesObservable = this.fireServ.getElementList();
  }

  addNewCourse() {
    this.router.navigate(['course/addnew']);
  }

}
