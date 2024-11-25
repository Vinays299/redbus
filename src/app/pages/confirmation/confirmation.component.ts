import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent implements OnInit {
 
  bookingData: any;
  seatSelection: boolean[] | undefined;
  confirmBooking: any;

  ngOnInit(): void {
    this.bookingData = JSON.parse(localStorage.getItem('bookingData') || '{}');
    this.seatSelection = JSON.parse(localStorage.getItem('seatSelection') || '[]');
  }
}
