import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seat-selection',
  templateUrl: './seat-selection.component.html',
  styleUrl: './seat-selection.component.css'
})
export class SeatSelectionComponent implements OnInit {


  seats: boolean[] = Array(45).fill(false); 
  seatSelectionForm!: FormGroup<any>;
  availableSeats: any;
  onSubmit: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }
  someMethod() {
    this.router.navigate(['/confirmation']);
  }

  selectSeat(index: number): void {
    this.seats[index] = !this.seats[index]; 
  }

  proceedToConfirmation(): void {
    const bookingData = JSON.parse(localStorage.getItem('bookingData') || '{}');
    
    localStorage.setItem('seatSelection', JSON.stringify(this.seats));
    this.router.navigate(['/confirmation']);
  }
}

