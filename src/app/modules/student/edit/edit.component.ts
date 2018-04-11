import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FirebaseService } from '../../../services/firebase.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentData } from '../../../models/student-data';
import { CourseDetail } from '../../../models/course-detail';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  student: StudentData;
  studentForm: FormGroup;
  courseList: Array<CourseDetail>;
  showloading: boolean;

  constructor( private newStudent: FormBuilder,
    private fireServ: FirebaseService,
    private route: Router,
    private router: ActivatedRoute) {
      this.student = new StudentData;
     }

  ngOnInit() {
    this.fireServ.node = 'student';
    this.router.params.subscribe(params => {
      this.fireServ.getOnceElement(params['student']).subscribe(data => {
        this.student.id = params['student'];
        this.student.student = data;
        this.fillSelected();
        this.showloading = false;
        this.setValueForm();

      });
    });
    this.createForm();
  }

  fillSelected() {
    this.fireServ.getElementList('courses').subscribe((data) => {
      this.courseList = data as CourseDetail[];
    });
  }

  setValueForm() {
    this.studentForm.setValue({
      name: this.student.student.name,
      lastName: this.student.student.lastName,
      age: this.student.student.age.toString(),
      course: this.student.student.course
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

  putStudentData() {
    const updateData = this.studentForm.getRawValue();
    this.fireServ.updateOnceElement(this.student.id, updateData);
    this.route.navigate(['/course']);
  }

}
