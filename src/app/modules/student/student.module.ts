import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { MainComponent } from './main/main.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule
  ],
  declarations: [MainComponent, ListComponent]
})
export class StudentModule { }
