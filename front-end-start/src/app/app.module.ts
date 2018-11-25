import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination'; 

// COMPONENTS ----------------------------------------------------
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
    HttpClientModule,
    NgbModule.forRoot(),
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule, 
    NgxPaginationModule,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
