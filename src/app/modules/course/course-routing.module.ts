import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { MainComponent } from './main/main.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { EditComponent } from './edit/edit.component';
const routes: Routes = [
  {
    path: 'course',
    component: MainComponent,
    children: [
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: '',
        component: ListComponent
      },
      {
        path: 'addnew',
        component: AddcourseComponent
      },
      {
        path: 'edit/:courseName',
        component: EditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule {}
