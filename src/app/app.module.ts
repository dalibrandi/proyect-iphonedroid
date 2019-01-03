import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule, MatGridListModule} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { CardsComponent } from './cards/cards.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    CardsComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatGridListModule,
    NgxMasonryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
