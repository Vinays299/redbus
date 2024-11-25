import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './pages/search/search.component';
import { BookingComponent } from './pages/booking/booking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BusListComponent } from './pages/bus-list/bus-list.component';
import { SeatSelectionComponent } from './pages/seat-selection/seat-selection.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    BookingComponent,
    BusListComponent,
    SeatSelectionComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideHttpClient(withFetch()),
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
