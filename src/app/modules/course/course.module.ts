import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { ListComponent } from './list/list.component';
import { MainComponent } from './main/main.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import {TableModule} from 'primeng/table';

@NgModule({
  imports: [
    CommonModule,
    CourseRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule
  ],
  declarations: [ListComponent, MainComponent, AddcourseComponent, EditComponent],
  exports: [ ListComponent, MainComponent]

})
export class CourseModule { }
