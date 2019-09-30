import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextualSearchComponent } from './contextual-search.component';
import { FormsModule, NgForm } from '@angular/forms';
import { of } from 'rxjs';


const event: KeyboardEvent = {
target: {
  value: 'pune'
},
stopPropagation () {

},
preventDefault() {
  return ;
}

} as any;
describe('ContextualSearchComponent', () => {
  let component: ContextualSearchComponent;
  let fixture: ComponentFixture<ContextualSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ ContextualSearchComponent ],
      providers: [NgForm]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextualSearchComponent);
    component = fixture.componentInstance;
    component.name = 'origin';
    component.options = [ 'pune', 'delhi'];
    component.keyUp.next(event);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should focus', () => {
    component.openList(event);
    expect(component.citiesList).toEqual(component.options);
  });

  it('should search', () => {
    component.search('pune');
    expect(component.citiesList).toEqual(['pune']);
  });

  it('should search else', () => {
    component.search(null);
    expect(component.citiesList).toEqual(component.options);
  });

  it('should select ', () => {
    component.selectedItem(event, 'pune');
    expect(component.model).toEqual('pune');
  });

  it('should  handle click outside', () => {
    component.handleClickEvent(event);
    expect(component.citiesList).toEqual([]);
  });


});
