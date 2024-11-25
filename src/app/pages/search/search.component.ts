import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  ngOnInit(): void {
   
  }

  searchCriteria = {
    from: 'Latur',
    to: 'Pune',
    date: '27 Aug 2024'
  };

  availableBuses = [
    {
      name: 'Pushkaraj Travels',
      type: 'A/C Sleeper (2+1)',
      departureTime: '19:00',
      duration: '7h 55m',
      arrivalTime: '08:55',
      rating: '4.5',
      ratingsCount: 567,
      price: 'INR 1000',
      seatsAvailable: 8
    },
   { name: 'Patil Travels',
      type: 'A/C Seater (2+1)',
      departureTime: '22:00',
      duration: '6h 55m',
      arrivalTime: '07:55',
      rating: '4.4',
      ratingsCount: 555,
      price: 'INR 500',
      seatsAvailable: 18
   },
   { name: 'Maharaja Travels',
    type: 'A/C Sleeper (2+1)',
    departureTime: '00:10',
    duration: '6h 55m',
    arrivalTime: '06:55',
    rating: '4.3',
    ratingsCount: 667,
    price: 'INR 899',
    seatsAvailable: 33
 },
  ];

  onSearch(): void {
   
    console.log('Searching buses with criteria:', this.searchCriteria);
  }
}
