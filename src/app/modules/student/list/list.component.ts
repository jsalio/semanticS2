import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseService } from '../../../services/firebase.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { StudentDetails } from '../../../models/student-details';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  studentsObservable: any[];
  cols: any[];
  loading: boolean;

  constructor(
    private db: AngularFireDatabase,
    private fireServ: FirebaseService,
    private router: Router) {
      this.loading = true;
     }

  ngOnInit() {
    this.cols = [
      {header: 'First name', field: 'name'},
      {header: 'Last name', field: 'lastName'},
      {header: 'Age', field: 'age'},
      {header: 'Course', field: 'course'},
      {header: 'Action', field: ''}
    ];
    this.fireServ.node = 'student';
    this.fireServ.getElementList().subscribe((data) => {
      this.studentsObservable = data;
      this.loading = false;
    });
  }

  addNewStudent() {
    this.router.navigate(['/student/add']);
  }

  getStudentUrl(student: StudentDetails): String {
    return `${student.name.replace(/ /g, '_')}_${student.lastName.replace(/ /g, '_')}`;
  }

}
