import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestigationRoutingModule } from './investigation-routing.module';
import { InvestigationComponent } from './investigation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    InvestigationComponent
  ],
  imports: [
    CommonModule,
    InvestigationRoutingModule,
    FontAwesomeModule,
  ]
})
export class InvestigationModule { }
