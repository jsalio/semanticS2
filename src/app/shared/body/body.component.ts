import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  title = 'app';
  course: any;
  coursesObservable: Observable<any[]>;
  constructor(private db: AngularFireDatabase, private fireServ: FirebaseService) {}

  ngOnInit() {
    this.fireServ.node = 'courses';
    this.coursesObservable = this.fireServ.getElementList();
    this.addCourse();
  }

  addCourse() {
    this.course = {
      description: 'Semantic ui Css framework',
      title: 'Semantic',
      url: 'https://semantic-ui.com/'
    };
    this.fireServ.pushOnRef('Semantic U3', this.course);
  }
}
