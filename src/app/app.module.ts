import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHerosComponent } from './top-heros/top-heros.component';
import { TopHerosItemComponent } from './top-heros/top-heros-item/top-heros-item.component';
import { HeroEditComponent } from './hero-edit/hero-edit.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HerosItemComponent } from './hero-list/heros-item/heros-item.component';
import { AddHeroComponent } from './hero-list/add-hero/add-hero.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHerosComponent,
    TopHerosItemComponent,
    HeroEditComponent,
    HeroListComponent,
    HerosItemComponent,
    AddHeroComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
