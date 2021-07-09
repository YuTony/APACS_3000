import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Types } from "../models/APACSInterfaces";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { APACSStabService } from "../services/APACS-stab.service";
import * as bounded from "../models/bounded";

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
  fields: {name: string, type: string, valueList?: {[key: number]: string}}[] = []

  constructor(private api: APACSStabService, private fb: FormBuilder) { }

  generateForm(template: Types) {

    let fields = Object.keys(template).reduce<{[key: string]: any}>((acc, val) => {
      let vals = []
      let valueList: {[key: number]: string} | undefined;
      if (template.strClassID.toString() in bounded) {
        // @ts-ignore
        if (val in bounded[template.strClassID.toString()]) {
          // @ts-ignore
          let bou = bounded[template.strClassID.toString()]
          if ("MinRange" in bou[val])
            vals.push(Validators.minLength(bou[val]["MinRange"]))
          if ("MaxRange" in bou[val])
            vals.push(Validators.maxLength(bou[val]["MaxRange"]))
          if ("ValueList" in bou[val])
            valueList = bou[val]["ValueList"]
        }
      }
      if (!valueList) {
        this.fields.push({type: "input", name: val})
      } else {
        this.fields.push({type: "select", name: val, valueList: valueList})
      }
      // @ts-ignore
      acc[val] = [{value: template[val], disabled: false}, vals];
      // console.log(acc)
      return acc;
    }, {})

    this.objectForm = this.fb.group(fields);
  }

  ConvertStringToNumber(input: string) {
    if (!input) return NaN;
    if (input.trim().length==0) {
      return NaN;
    }
    return Number(input);
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
