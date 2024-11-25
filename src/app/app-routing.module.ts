import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';
import { BookingComponent } from './pages/booking/booking.component';
import { BusListComponent } from './pages/bus-list/bus-list.component';
import { SeatSelectionComponent } from './pages/seat-selection/seat-selection.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'booking',
    component: BookingComponent
  },
  { path: '', redirectTo: '/bus-list', pathMatch: 'full' },
  { path: 'bus-list', component: BusListComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'seat-selection', component: SeatSelectionComponent },
  { path: 'confirmation', component: ConfirmationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
