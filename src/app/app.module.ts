import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TabComponent } from './components/tab/tab.component';
import { ContextualSearchComponent } from './components/contextual-search/contextual-search.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { FlightListComponent } from './components/flight-list/flight-list.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, TabComponent, ContextualSearchComponent, SearchFormComponent, InfoCardComponent, FlightListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
