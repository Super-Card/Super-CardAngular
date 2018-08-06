import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }          from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AutoComponent } from './pages/auto/auto.component';
import { BeautyComponent } from './pages/beauty/beauty.component';
import { ClothesComponent } from './pages/clothes/clothes.component';
import { TechComponent } from './pages/tech/tech.component';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ClothesFilterComponent } from './components/clothes/clothes-filter/clothes-filter.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'auto', component: AutoComponent },
  { path: 'beauty', component: BeautyComponent },
  { path: 'clothes', component: ClothesComponent },
  { path: 'tech', component: TechComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AutoComponent,
    BeautyComponent,
    ClothesComponent,
    TechComponent,
    RestaurantsComponent,
    PageNotFoundComponent,
    ClothesFilterComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }