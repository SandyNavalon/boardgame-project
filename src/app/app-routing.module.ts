import { WishlistComponent } from './core/components/wishlist/wishlist.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './core/components/contact-page/contact-page.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import( './pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'boardgames',
    loadChildren: () => import( './pages/boardgames/boardgames.module').then(m => m.BoardgamesModule)
  },
  {
    path: 'admin',
    loadChildren: () => import( './pages/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path:'about',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path:'home/for-two',
    loadChildren: () => import('./pages/home/components/for-two/for-two.module').then(m => m.ForTwoModule)
  },
  {
    path:'home/investigation-boardgames',
    loadChildren: () => import('./pages/home/components/investigation/investigation.module').then(m => m.InvestigationModule)
  },
  {
    path:'home/conquest-boardgames',
    loadChildren: () => import('./pages/home/components/conquest/conquest.module').then(m => m.ConquestModule)
  },
  {
    path:'home/crawler-boardgames',
    loadChildren: () => import('./pages/home/components/crawler/crawler.module').then(m => m.CrawlerModule)
  },
  {
    path:'home/kids-boardgames',
    loadChildren: () => import('./pages/home/components/kids/kids.module').then(m => m.KidsModule)
  },
  {
    path:'wishlist',component: WishlistComponent
  },
  {
    path:"contact", component: ContactPageComponent
  },

  {
    path:'', redirectTo:'home', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
