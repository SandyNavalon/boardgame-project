import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './../../shared/shared.module';
import { BoardgamesService } from './boardgames.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardgamesRoutingModule } from './boardgames-routing.module';
import { BoardgamesComponent } from './boardgames.component';
import { HttpClientModule } from '@angular/common/http';
import { BoardgamesFinderComponent } from './components/boardgames-finder/boardgames-finder.component';


@NgModule({
  declarations: [
    BoardgamesComponent,
    BoardgamesFinderComponent,
  ],
  imports: [
    CommonModule,
    BoardgamesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [
    BoardgamesService
  ]
})
export class BoardgamesModule { }
