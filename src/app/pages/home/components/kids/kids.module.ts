import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KidsRoutingModule } from './kids-routing.module';
import { KidsComponent } from './kids.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    KidsComponent
  ],
  imports: [
    CommonModule,
    KidsRoutingModule,
    FontAwesomeModule,
  ]
})
export class KidsModule { }
