import { Component, Input, OnInit } from '@angular/core';
import { FirebaseService } from '../../../services/firebase.service';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentData } from '../../../models/student-data';
import { Course } from '../../../models/course';
import { CourseDetail } from '../../../models/course-detail';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  student: StudentData;
  studentForm: FormGroup;
  courseList: Array<CourseDetail>;

  constructor(
    private newStudent: FormBuilder,
    private frireServ: FirebaseService,
    private router: Router
  ) {}

  ngOnInit() {
    this.frireServ.node = 'student';
    this.student = new StudentData;
    this.createForm();
    this.fillSelected();
  }

  saveNewStudenData() {
    this.frireServ.node = 'student';
    this.student.student = this.studentForm.getRawValue();
    this.student.id = `${this.student.student.name.replace(/ /g, '_')}_${this.student.student.lastName.replace(/ /g, '_')}`;
    console.log(this.student);
    this.frireServ.pushOnRef(this.student.id, this.student.student);
  }

  fillSelected() {
    this.frireServ.getElementList('courses').subscribe((data) => {
      this.courseList = data as CourseDetail[];
    });
  }

  createForm() {
    this.studentForm = this.newStudent.group({
      name: '',
      lastName: '',
      age: '',
      course: ''
    });
  }
}
