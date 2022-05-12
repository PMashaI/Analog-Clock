import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hand-arrow',
  templateUrl: './hand-arrow.component.html',
  styleUrls: ['./hand-arrow.component.css']
})
export class HandArrowComponent {
  @Input() arrowType = '';
  @Input() time = 0;
}
