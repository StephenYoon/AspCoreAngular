import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { OfferAdminComponent } from './components/offer-admin/offer-admin.component';
import { OfferBookingComponent } from './components/offer-booking/offer-booking.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'offer', component: OfferAdminComponent },
    { path: 'booking', component: OfferBookingComponent },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    OfferAdminComponent,
    OfferBookingComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
