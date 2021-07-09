import { Component, Input, OnChanges } from '@angular/core';
import { Types } from "../models/APACSInterfaces";

@Component({
  selector: 'app-info-object',
  templateUrl: './info-object.component.html',
  styleUrls: ['./info-object.component.scss']
})
export class InfoObjectComponent implements OnChanges {
  @Input() object: Types | undefined;

  constructor() { }

  ngOnChanges() {
  }

}
