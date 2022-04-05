import { BoardgamesFinderComponent } from './components/boardgames-finder/boardgames-finder.component';

import { BoardgamesComponent } from './boardgames.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: BoardgamesComponent
  },
  {
    path: ':name', component: BoardgamesFinderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardgamesRoutingModule { }
