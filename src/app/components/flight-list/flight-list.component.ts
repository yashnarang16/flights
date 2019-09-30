import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
  @Input() flightList: any = [];
  @Input() roundTrip: Boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
