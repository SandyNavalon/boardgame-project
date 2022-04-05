import { MatTableModule } from '@angular/material/table';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
/* import { MatOptionModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip' */
/* import { MatPaginator } from '@angular/material/paginator/paginator';
 */
/* import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from 'src/environments/environment'; */


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    NgbModule,
    SharedModule,
    MatTableModule,
    FontAwesomeModule


  ],
  providers: [
   /*  MatOptionModule,
    MatTooltipModule,
    MatPaginator, */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
