import { Component, OnInit } from '@angular/core';
import { CitiesService } from './services/cities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  public flightList: any = [];
  public roundTrip: Boolean;
  constructor(public searchService: CitiesService) {

  }

  ngOnInit() {
    this.searchService.search.asObservable().subscribe((res: any) => {
      if (res && res.data.length > 0) {
        this.flightList = res.data;
        this.roundTrip = res.roundTrip;
      } else {
        this.flightList = [];
      }
    });
  }

}
