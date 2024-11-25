import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrl: './bus-list.component.css'
})
export class BusListComponent implements OnInit {

  buses = [
    { id: 1, name: 'Pushkaraj Travels', departureTime: '10:00 AM', arrivalTime: '12:00 PM' },
    { id: 2, name: 'Vishwa Travels', departureTime: '07:00 PM', arrivalTime: '05:00 AM' },
    { id: 3, name: 'Mansi Travels', departureTime: '05:00 PM', arrivalTime: '11:00 PM' }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selectBus(busId: number): void {
    localStorage.setItem('selectedBusId', busId.toString());
    this.router.navigate(['/booking-form']);
  }
}
