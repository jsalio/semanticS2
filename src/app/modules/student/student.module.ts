import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StudentRoutingModule } from './student-routing.module';
import { MainComponent } from './main/main.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { SuiModule } from 'ng2-semantic-ui';
import {TableModule} from 'primeng/table';
import { EditComponent } from './edit/edit.component';

@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule,
    SuiModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule
  ],
  declarations: [MainComponent, ListComponent, AddComponent, EditComponent]
})
export class StudentModule { }
