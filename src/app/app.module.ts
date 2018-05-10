import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import {BookService} from './book.service';
import { BookDetailsComponent } from './book-details/book-details.component';
import { NavigatorComponent } from './navigator/navigator.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SearchComponent,
    BookDetailsComponent,
    NavigatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
