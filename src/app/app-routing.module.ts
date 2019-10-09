import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroListComponent } from './hero-list/hero-list.component'
import { TopHerosComponent } from './top-heros/top-heros.component';
import { HeroEditComponent } from './hero-edit/hero-edit.component';


const routes: Routes = [
  { path: '', component: TopHerosComponent },
  { path: 'dashboard', component: TopHerosComponent },
  { path: 'heros', component: HeroListComponent },
  { path: 'edit/:id', component: HeroEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
