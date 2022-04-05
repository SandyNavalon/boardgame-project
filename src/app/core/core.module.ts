import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { WishlistSonComponent } from './components/wishlist/wishlist-son/wishlist-son.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    WishlistComponent,
    ContactPageComponent,
    WishlistSonComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    WishlistComponent
  ],
})
export class CoreModule { }
