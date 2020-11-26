import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { DetailComponent } from '../detail/detail.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;
  constructor(private cfr: ComponentFactoryResolver) {}
  ngAfterViewInit() {
    console.log('after');
    console.log(this.target);
  }

  load() {
    console.log(this.target);
    const cmpFcty = this.cfr.resolveComponentFactory(DetailComponent);
    this.target.createComponent(cmpFcty);
  }
}
