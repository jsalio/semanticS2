import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Course } from '../../../models/course';
import { FirebaseService } from '../../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.scss']
})
export class AddcourseComponent implements OnInit {

  course: Course;
  courseForm: FormGroup;

  constructor(
    private  newCourse: FormBuilder ,
    private frireServ: FirebaseService,
    private router: Router
  ) {
    this.course = new Course;
    this.createForm();
  }

  ngOnInit() {
    this.frireServ.node = 'courses';
  }

 createForm() {
   this.courseForm = this.newCourse.group({
    title : '',
     description : '',
     url: ''
   });
 }

 postCourse() {
  this.course.details = this.courseForm.getRawValue();
  this.course.details.url = `http://${this.course.details.url}`;
  this.course.id = this.course.details.title.replace(/ /g, '_');
  this.frireServ.pushOnRef(this.course.id, this.course.details);
  this.router.navigate(['course/list']);
 }

}
