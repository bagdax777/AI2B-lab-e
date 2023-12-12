import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";
import {provideRouter, RouterModule} from "@angular/router";
import routeConfig from "./routes";
import { RandomComponent } from './random/random.component';
import { ListComponent } from './list/list.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    RandomComponent,
    ListComponent,
  ],
    imports: [
        BrowserModule,
        HomeComponent,
        RouterModule,
        FormsModule,
    ],
  providers: [provideRouter(routeConfig)],
  bootstrap: [AppComponent]
})

export class AppModule { }
