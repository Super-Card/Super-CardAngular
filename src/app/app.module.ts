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
import { LocationsComponent } from './components/restaurants/locations/locations.component';
import { ItemComponent } from './components/restaurants/locations/item/item.component';
import { ListItemsComponent } from './components/restaurants/locations/list-items/list-items.component';
import { DescriptionComponent } from './components/restaurants/locations/description/description.component';
import { ReservationsComponent } from './components/restaurants/reservations/reservations.component';
import { SelectLocationComponent } from './components/restaurants/reservations/select-location/select-location.component';
import { SelectDateComponent } from './components/restaurants/reservations/select-date/select-date.component';
import { SelectTimeComponent } from './components/restaurants/reservations/select-time/select-time.component';
import { SelectPeopleComponent } from './components/restaurants/reservations/select-people/select-people.component';
import { LocationComponent } from './components/restaurants/reservations/location/location.component';
import { CompleteReservationComponent } from './components/restaurants/reservations/complete-reservation/complete-reservation.component';
import { ConfirmationModalComponent } from './components/restaurants/reservations/confirmation-modal/confirmation-modal.component';
import { CountdownComponent } from './components/auto/countdown/countdown.component';
import { CardCheckComponent } from './components/auto/card-check/card-check.component';
import { NewsletterComponent } from './components/auto/newsletter/newsletter.component';

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
    ClothesFilterComponent,
    LocationsComponent,
    ItemComponent,
    ListItemsComponent,
    DescriptionComponent,
    ReservationsComponent,
    SelectLocationComponent,
    SelectDateComponent,
    SelectTimeComponent,
    SelectPeopleComponent,
    LocationComponent,
    CompleteReservationComponent,
    ConfirmationModalComponent,
    CountdownComponent,
    CardCheckComponent,
    NewsletterComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }