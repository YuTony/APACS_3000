import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Types } from "../models/APACSInterfaces";
import { FormBuilder, FormGroup } from "@angular/forms";
import { APACSStabService } from "../services/APACS-stab.service";

@Component({
  selector: 'app-edit-object',
  templateUrl: './edit-object.component.html',
  styleUrls: ['./edit-object.component.scss']
})
export class EditObjectComponent implements OnInit {
  @Input() object: Types | undefined;
  @Output() cancelFunc = new EventEmitter<void>();

  objectForm: FormGroup = new FormGroup({});
  template: Types | undefined;
  fields: String[] = [];

  constructor(private api: APACSStabService, private fb: FormBuilder) { }

  generateForm(template: Types) {
    let fields = Object.keys(template).reduce<{[key: string]: any}>((acc, val) => {
      // @ts-ignore
      acc[val] = {value: template[val], disabled: false};
      // console.log(acc)
      return acc;
    }, {})

    this.objectForm = this.fb.group(fields);
    this.fields = Object.keys(template);
  }

  ngOnInit(): void {
    if (this.object) {
      this.generateForm(this.object)
    }
  }

  onSubmit() {
    // console.log(this.objectForm.getRawValue())
    this.api.editObject(this.object!.sysAddrID, this.objectForm.getRawValue()).subscribe();
  }

}
