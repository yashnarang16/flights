import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent implements OnInit {
  @Input() flightList: any = [];
  @Input() roundTrip: Boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
