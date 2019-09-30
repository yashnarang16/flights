import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabComponent } from './tab.component';
import { SearchFormComponent } from '../search-form/search-form.component';
import { ContextualSearchComponent } from '../contextual-search/contextual-search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';



const event: KeyboardEvent = {
  target: {
    value: 'pune',
    addClass() {

    }
  },
  stopPropagation() {

  },
  preventDefault() {
    return;
  }

} as any;





describe('TabComponent', () => {
  let component: TabComponent;
  let fixture: ComponentFixture<TabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule],
      declarations: [TabComponent, SearchFormComponent, ContextualSearchComponent],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
