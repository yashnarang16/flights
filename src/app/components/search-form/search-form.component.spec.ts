import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchFormComponent } from './search-form.component';
import { ContextualSearchComponent } from '../contextual-search/contextual-search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, Subject } from 'rxjs';
import { CitiesService } from '../../services/cities.service';

class MockCity {
  search = new Subject();
  getAllCities() {
    return of(new Set('pune'));
  }
  searchFlights() {
    return of({});
  }
}
describe('SearchFormComponent', () => {
  let component: SearchFormComponent;
  let fixture: ComponentFixture<SearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule],
      declarations: [SearchFormComponent, ContextualSearchComponent],
      providers: [ {provide: CitiesService, useClass: MockCity}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit', () => {
    component.submit();
    expect(component).toBeTruthy();
  });
});
