import { Component, Input, OnInit } from '@angular/core';
import { Actions } from "../models/interfaces";

@Component({
  selector: 'app-tree-menu',
  templateUrl: './tree-menu.component.html',
  styleUrls: ['./tree-menu.component.scss']
})
export class TreeMenuComponent implements OnInit {

  @Input() actionHandler: (action: Actions) => void = (action) => undefined;

  constructor() { }

  ngOnInit(): void {
    console.log('')
  }

}
