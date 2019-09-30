import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCardComponent } from './info-card.component';

describe('InfoCardComponent', () => {
  let component: InfoCardComponent;
  let fixture: ComponentFixture<InfoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InfoCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCardComponent);
    component = fixture.componentInstance;
    component.flightList = {
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
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
