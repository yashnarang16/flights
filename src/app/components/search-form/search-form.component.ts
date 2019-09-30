import { Component, OnInit, ViewChild, Input, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CitiesService } from '../../services/cities.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit, OnDestroy {
  @Input() return: Boolean = false;
  @Input() refine: any;
  public search = {
    origin: null,
    destination: null,
    departureDate: null,
    returnDate: null,
    passangers: 1,
    refine: null
  };

public citiesList: any;
public citiesSub: Subscription;
public searchSub: Subscription;

  @ViewChild('searchForm') searchForm: NgForm;
  constructor(public cities: CitiesService) { }

  ngOnInit() {
   this.citiesSub = this.citiesSub =  this.cities.getAllCities().pipe().subscribe(data => {
       this.citiesList = Array.from(data);
     });
  }

  submit () {
  const formValue = this.searchForm.value;
  formValue['refine'] = this.refine;
  this.searchSub = this.cities.searchFlights(formValue).subscribe(res => {
    if (res) {
     this.cities.search.next({data: res, roundTrip: this.return});
    } else {
      this.cities.search.next({data: [], roundTrip: this.return});
    }
  });
  }


  ngOnDestroy() {
    if (this.citiesSub) {
      this.citiesSub.unsubscribe();
    }
    if (this.searchSub) {
      this.searchSub.unsubscribe();
     }
  }
}
