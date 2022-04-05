import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConquestRoutingModule } from './conquest-routing.module';
import { ConquestComponent } from './conquest.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    ConquestComponent
  ],
  imports: [
    CommonModule,
    ConquestRoutingModule,
    FontAwesomeModule,
  ]
})
export class ConquestModule { }
