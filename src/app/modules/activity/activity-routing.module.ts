import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Path } from '@firebase/database/dist/esm/src/core/util/Path';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: 'activity',
    component: HomeComponent,
    children: [
      {
        path: 'new',
        component: NewComponent
      },
      {
        path: '',
        component: ListComponent
      },
      {
        path: 'edit/:id',
        component: EditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityRoutingModule {}
