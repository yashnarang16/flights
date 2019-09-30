import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, retry } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  public search = new Subject();
  public url: any = '../../assets/data/data.json';
  constructor(public http: HttpClient) { }

  getAllCities(): Observable<any> {
    return this.http.get(this.url).pipe(map(res => this.extractCities(res)));
  }

  private extractCities(data: any = []) {
    const cities = new Set();
    (data.flights || []).map(city => {
      cities.add(city.origin);
      cities.add(city.destination);
    });
    return cities;
  }


  searchFlights(params: any) {
    return this.http.get(this.url).pipe(map(res => this.extractFlights(res, params)));
  }

  private extractFlights(data: any, params: any) {
    const returnDate = params.hasOwnProperty('returnDate') ? true : false;
    const newFlights = [];
    (data.flights || []).map((flight: any) => {
      flight.amount = parseInt(flight.amount, 10);
      const dDate = flight.date.split(' ')[0];
      const rDate = flight.hasOwnProperty('return') ? flight.return.split(' ')[0] : '';
      if (flight.origin === params.origin && flight.destination === params.destination) {
        if (returnDate) {
          if (dDate === params.departureDate && rDate === params.returnDate) {
            newFlights.push(flight);
          }
        } else {
          if (dDate === params.departureDate) {
            newFlights.push(flight);
          }
        }
      }
    });
    const searchedFlights = [];
    (newFlights || []).map((flight: any) => {
      if (returnDate) {
        flight.amount = flight.amount * 2;
      }
      if (flight.amount <= params.refine) {
        searchedFlights.push(flight);
      }
    });
    return searchedFlights;
  }


}
