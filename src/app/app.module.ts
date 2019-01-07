import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {DatePipe} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule, MatGridListModule} from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { CardsComponent } from './cards/cards.component';
import { DetailsComponent } from './details/details.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    CardsComponent,
    DetailsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatGridListModule,
    NgxMasonryModule,
    MatInputModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
