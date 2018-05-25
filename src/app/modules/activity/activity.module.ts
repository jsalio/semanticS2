import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRoutingModule } from './activity-routing.module';
import { NewComponent } from './new/new.component';
import { HomeComponent } from './home/home.component';
import { SuiCheckboxModule } from 'ng2-semantic-ui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import {TableModule} from 'primeng/table';
import { EditComponent } from './edit/edit.component';

@NgModule({
  imports: [
    CommonModule,
    ActivityRoutingModule,
    SuiCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule
  ],
  declarations: [NewComponent, HomeComponent, ListComponent, EditComponent],
  exports: [NewComponent, HomeComponent]
})
export class ActivityModule { }
