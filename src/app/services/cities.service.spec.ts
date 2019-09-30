import { TestBed, getTestBed } from '@angular/core/testing';

import { CitiesService } from './cities.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('CitiesService', () => {
  let injector: TestBed;
  let service: CitiesService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CitiesService],
    });

    injector = getTestBed();
    service = injector.get(CitiesService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });
  it('getAllCities() should return data', () => {
    service.getAllCities().subscribe((res) => {
      expect(res).toEqual(new Set(['delhi', 'pune']));
    });

    const req = httpMock.expectOne('../../assets/data/data.json');
    expect(req.request.method).toBe('GET');
    req.flush({ flights: [{ origin: 'delhi', destination: 'pune' }] });
  });

  it('search() should return data', () => {
    const params = {
      origin: 'Delhi',
      destination: 'Pune',
      departureDate: '2019-09-09 01:02:03',
      passangers: 1,
      refine: 5000
    };

    service.searchFlights(params).subscribe((res) => {
      expect(res).toEqual([]);
    });

    const req = httpMock.expectOne('../../assets/data/data.json');
    expect(req.request.method).toBe('GET');
    req.flush({
      flights: [{
        "flightNo": "AL-209",
        "origin": "Delhi",
        "originCode": "DEL",
        "destCode": "PNQ",
        "destination": "Pune",
        "time": {
          "depart": "2019-09-09 08:00:00",
          "arrive": "2019-09-09 10:30:00"
        },
        "returnTime": {
          "depart": "2019-09-15 01:00:00",
          "arrive": "2019-09-15 03:30:00"
        },
        "date": "2019-09-09 01:02:03",
        "return": "2019-09-15 01:09:09",
        "amount": "2000.00"
      }]
    });
  });

});
