import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { BodyComponent } from './body/body.component';
import { SuiModule } from 'ng2-semantic-ui';
@NgModule({
  imports: [
    CommonModule,
    SuiModule
  ],
  declarations: [MenuComponent, FooterComponent, NavComponent, BodyComponent],
  exports: [MenuComponent, FooterComponent, NavComponent, BodyComponent]
})
export class SharedModule { }
