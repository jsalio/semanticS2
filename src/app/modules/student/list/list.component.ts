import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseService } from '../../../services/firebase.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  studentsObservable: Observable<any[]>;
  constructor(
    private db: AngularFireDatabase,
    private fireServ: FirebaseService,
    private router: Router) { }

  ngOnInit() {
    this.fireServ.node = 'student';
    this.studentsObservable = this.fireServ.getElementList();
  }

}
