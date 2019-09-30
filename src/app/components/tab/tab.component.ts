import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';


@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  public currentTab: any;
  public refineModel: any = 5000;
  constructor(public renderer: Renderer2, public ele: ElementRef) { }

  ngOnInit() {
    this.setStyle('oneway');
  }

  tabChange(event: Event, elementId: string) {
    const allTabs = this.ele.nativeElement.querySelectorAll('.tablinks');
    this.renderer.removeClass(allTabs[0], 'active');
    this.renderer.removeClass(allTabs[1], 'active');
    const currentTab = event.target;
    if (currentTab) {
      this.renderer.addClass(currentTab, 'active');
    }
    this.setStyle(elementId);
  }

  setStyle(element: string) {
    this.currentTab = element;
  }

  valueChange(event: Event) {
    this.refineModel = event.target['value'];
  }


}
