import { Component, OnInit, Input, ElementRef, OnDestroy } from '@angular/core';
import { NgForm, ControlContainer } from '@angular/forms';
import { Subscription, Subject, of } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, mergeMap } from 'rxjs/operators';


@Component({
  selector: 'app-contextual-search',
  // tslint:disable-next-line:use-host-property-decorator
  host: { '(document:click)': 'handleClickEvent($event)' },
  templateUrl: './contextual-search.component.html',
  styleUrls: ['./contextual-search.component.css'],
  viewProviders: [{provide: ControlContainer, useExisting: NgForm }]
})
export class ContextualSearchComponent implements OnInit, OnDestroy {
  public query: string;
  @Input() model: any;
  @Input() form: NgForm;
  @Input() options: any;
  @Input() name: any;
  @Input() placeholder: string;
  @Input() excludeCity: string;
  public citiesList: any;
  public keyUp = new Subject<KeyboardEvent>();
  private subscription: Subscription;
  constructor(public elementRef: ElementRef) {
     this.subscription = this.keyUp.pipe(
      map((event: any) => event.target.value),
      debounceTime(100),
      distinctUntilChanged(),
      mergeMap(search => of(search).pipe())).subscribe(data => this.search(data));
   }

  ngOnInit() {

  }

  openList(event: Event) {
    this.citiesList = this.options;
  }

  search(input: string) {
    if (input !== null && input !== undefined && input !== '') {
     this.citiesList =  this.options.filter((data: any) => {
        return data.toLowerCase().startsWith(input.toLowerCase());
      });
    } else {
      this.citiesList = this.options;
    }
  }

  selectedItem(event: Event, val: string) {
    this.model = val;
    this.citiesList = [];
    event.preventDefault();
    event.stopPropagation();
  }

  public handleClickEvent(event: any) {
    let clickedTarget = event.target;
    let inComponent = false;
    do {
      if (clickedTarget === this.elementRef.nativeElement) {
        inComponent = true;
      }
      clickedTarget = clickedTarget.parentNode;
    }
    while (clickedTarget);
    if (!inComponent) {
      this.citiesList = [];
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
