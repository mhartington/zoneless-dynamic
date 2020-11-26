import { Component } from '@angular/core';
import { StateService } from '../state/state.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
  public state$ = this.state.select();

  constructor(private state: StateService) {}
}
