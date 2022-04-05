import { ForTwoComponent } from './for-two.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForTwoRoutingModule } from './for-two-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    ForTwoComponent,
  ],
  imports: [
    CommonModule,
    ForTwoRoutingModule,
    FontAwesomeModule,
  ]
})
export class ForTwoModule { }
