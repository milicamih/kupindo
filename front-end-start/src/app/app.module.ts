import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { NewComponent } from './auctions/new/new.component';
import { SearchComponent } from './auctions/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),

    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
