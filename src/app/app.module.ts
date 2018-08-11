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
import { ListItemsComponent } from './components/restaurants/locations/list-items/list-items.component';
import { DescriptionComponent } from './components/restaurants/locations/description/description.component';
import { ReservationsComponent } from './components/restaurants/reservations/reservations.component';
import { SelectLocationComponent } from './components/restaurants/reservations/select-location/select-location.component';
import { SelectDateComponent } from './components/restaurants/reservations/select-date/select-date.component';
import { SelectTimeComponent } from './components/restaurants/reservations/select-time/select-time.component';
import { SelectPeopleComponent } from './components/restaurants/reservations/select-people/select-people.component';
import { CompleteReservationComponent } from './components/restaurants/reservations/complete-reservation/complete-reservation.component';
import { ConfirmationModalComponent } from './components/restaurants/reservations/confirmation-modal/confirmation-modal.component';
import { DiscountsComponent } from './components/beauty/beauty-filters/discounts/discounts.component';
import { GenderComponent } from './components/beauty/beauty-filters/gender/gender.component';
import { HumanBodyComponent } from './components/beauty/beauty-filters/human-body/human-body.component';
import { PartnersComponent } from './components/beauty/beauty-filters/partners/partners.component';
import { ResultItemComponent } from './components/beauty/beauty-filters-result/result-item/result-item.component';
import { ResultListComponent } from './components/beauty/beauty-filters-result/result-list/result-list.component';
import {RequestModalComponent} from './components/home-content/request-modal/request-modal.component';
import { TechListComponent } from './components/tech/categories/tech-list/tech-list.component';
import { ClothesShopsComponent } from './components/clothes/clothes-shops/clothes-shops.component';
import { CountdownComponent } from './components/auto/countdown/countdown.component';
import { CardCheckComponent } from './components/auto/card-check/card-check.component';
import { NewsletterComponent } from './components/auto/newsletter/newsletter.component';
import { Restaurants } from './services/restaurants.service';
import { TechResultListComponent } from './components/tech/tech-result-list/tech-result-list.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { HeadingImageComponent } from './components/home-content/heading-image/heading-image.component';
import { AboutScComponent } from './components/home-content/about-sc/about-sc.component';
import { RequestFormComponent } from './components/home-content/request-form/request-form.component';
import { TechService } from './services/tech.service';
import { HomeService } from './services/home.service';
import { ContainerFiltersComponent } from './components/beauty/beauty-filters/container-filters/container-filters.component';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { BeautyService } from './services/beauty.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
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
    AngularDateTimePickerModule,
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
    ListItemsComponent,
    DescriptionComponent,
    ReservationsComponent,
    SelectLocationComponent,
    SelectDateComponent,
    SelectTimeComponent,
    SelectPeopleComponent,
    CompleteReservationComponent,
    ConfirmationModalComponent,
    DiscountsComponent,
    GenderComponent,
    HumanBodyComponent,
    PartnersComponent,
    ResultItemComponent,
    ResultListComponent,
    TechListComponent,
    ClothesShopsComponent,
    CountdownComponent,
    CardCheckComponent,
    NewsletterComponent,
    TechResultListComponent,
    HomeContentComponent,
    HeadingImageComponent,
    AboutScComponent,
    RequestFormComponent,
    ContainerFiltersComponent,
    RequestModalComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ Restaurants, TechService, BeautyService, HomeService ]
})
export class AppModule { }
