import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseService } from '../../../services/firebase.service';
import { Observable } from 'rxjs/Observable';
import { Course } from '../../../models/course';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CourseDetail } from '../../../models/course-detail';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  @Input() nodeID: string;
  editCourse: CourseDetail;
  showloading = true;
  course: Course;
  courseForm: FormGroup;

  constructor(
    private fireServ: FirebaseService,
    private newCourse: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.fireServ.node = 'courses';
    this.route.params.subscribe((params) => {
      this.fireServ.getOnceElement(params['courseName']).subscribe((data) => {
        this.editCourse = data;
        this.showloading = false;
        this.setValueForm();
      });
    });

    this.createForm();
  }

  setValueForm() {
    this.courseForm.setValue({
      title: this.editCourse.title,
      description: this.editCourse.description,
      url: this.editCourse.url
    });
  }

  createForm() {
    this.courseForm = this.newCourse.group({
      title: '',
      description: '',
      url: ''
    });
  }

  putCourseData() {
    const updateData = this.courseForm.getRawValue();
    this.fireServ.updateOnceElement(this.editCourse.title, updateData);
    this.router.navigate(['/course']);
  }
}
