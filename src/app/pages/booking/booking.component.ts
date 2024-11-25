import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit {

  bookingForm: FormGroup;
  selectedBus: any;

  constructor(private fb: FormBuilder, private router: Router) {
    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      departure: ['', Validators.required],
      destination: ['', Validators.required],
      date: ['', Validators.required],
      passengers: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.addPassenger(); 
    const busId = localStorage.getItem('selectedBusId');
    if (busId) {
      this.selectedBus = this.getBusById(Number(busId));
    }
  }

  get passengers(): FormArray {
    return this.bookingForm.get('passengers') as FormArray;
  }

  addPassenger(): void {
    const passengerGroup = this.fb.group({
      fullName: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]]
    });
    this.passengers.push(passengerGroup);
  }

  removePassenger(index: number): void {
    this.passengers.removeAt(index);
  }

  onProceedToSeats(): void {
    if (this.bookingForm.valid) {
      
      localStorage.setItem('bookingData', JSON.stringify(this.bookingForm.value));
      this.router.navigate(['/seat-selection']);
    }
  }

  getBusById(id: number): any {
    const buses = [
      { id: 1, name: 'Pushkraj Travels', departureTime: '10:00 AM', arrivalTime: '12:00 PM' },
      { id: 2, name: 'Vishwa Travels', departureTime: '07:00 PM', arrivalTime: '05:00 AM' },
      { id: 3, name: 'Mansi Travels', departureTime: '05:00 PM', arrivalTime: '11:00 PM' }
    ];
    return buses.find(bus => bus.id === id);
  }
}
