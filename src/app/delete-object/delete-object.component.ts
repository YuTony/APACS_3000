import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Types } from "../models/APACSInterfaces";
import { APACSStabService } from "../services/APACS-stab.service";

@Component({
  selector: 'app-delete-object',
  templateUrl: './delete-object.component.html',
  styleUrls: ['./delete-object.component.scss']
})
export class DeleteObjectComponent {
  @Input() object: Types | undefined;
  @Output() cancelFunc = new EventEmitter<void>();

  constructor(private api: APACSStabService) { }

  deleteObject() {
    this.api.deleteObject(this.object!.sysAddrID).subscribe(value => console.log(value), error => console.log(error));
  }
}
