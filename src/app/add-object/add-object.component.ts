import { Component, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Types } from "../models/APACSInterfaces";
import { APACSStabService } from "../services/APACS-stab.service";
import { FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from "@angular/forms";
import { files } from "../tree/example-data";
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-object',
  templateUrl: './add-object.component.html',
  styleUrls: ['./add-object.component.scss']
})
export class AddObjectComponent implements OnChanges {
  @Input() object: Types | undefined;
  @Output() cancelFunc = new EventEmitter<void>();

  objectForm: FormGroup = new FormGroup({});

  template: Types | undefined;

  fields: String[] = [];

  constructor(private api: APACSStabService, private fb: FormBuilder) { }

  generateForm(template: Types) {

    let fields = Object.keys(template).reduce<{[key: string]: any}>((acc, val) => {
      // @ts-ignore
      acc[val] = {value: template[val], disabled: template[val] !== ''};
      // console.log(acc)
      return acc;
    }, {})

    this.objectForm = this.fb.group(fields);
    this.fields = Object.keys(template);
  }

  async ngOnChanges() {
    this.template = undefined;
    this.template = await this.api.getObjectForAdd(this.object!.sysAddrID, 'TApcFolder').toPromise();
    this.generateForm(this.template);
    // console.log(this.template)
  }

  onSubmit() {
    // console.log(this.objectForm.getRawValue())
    this.api.addObject(this.object!.sysAddrID, this.objectForm.getRawValue()).subscribe(value => console.log(value));
  }

}
