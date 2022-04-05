import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrawlerRoutingModule } from './crawler-routing.module';
import { CrawlerComponent } from './crawler.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    CrawlerComponent
  ],
  imports: [
    CommonModule,
    CrawlerRoutingModule,
    FontAwesomeModule,
  ]
})
export class CrawlerModule { }
