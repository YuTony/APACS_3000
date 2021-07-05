import { Component, Input, OnChanges } from '@angular/core';
import { Types } from "../models/APACSInterfaces";

@Component({
  selector: 'app-info-object',
  templateUrl: './info-object.component.html',
  styleUrls: ['./info-object.component.scss']
})
export class InfoObjectComponent implements OnChanges {
  @Input() object: Types | undefined;

  strObject: String | undefined;

  constructor() { }

  ngOnChanges() {
    this.strObject = JSON.stringify(this.object);
  }

}
