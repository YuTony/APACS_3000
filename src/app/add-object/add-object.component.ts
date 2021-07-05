import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Types } from "../models/APACSInterfaces";
import { APACSStabService } from "../services/APACS-stab.service";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { files } from "../tree/example-data";

@Component({
  selector: 'app-add-object',
  templateUrl: './add-object.component.html',
  styleUrls: ['./add-object.component.scss']
})
export class AddObjectComponent implements OnChanges {
  @Input() object: Types | undefined;

  objectForm: FormGroup | undefined;

  // fields: {name: String, disabled: boolean}[] | undefined;
  // fields: Map<keyof Types, {value: String, disabled: boolean}> | undefined;
  fields: (keyof Types | {value: String, disabled: boolean})[][] | undefined;

  template: Types | undefined;

  constructor(private api: APACSStabService, private fb: FormBuilder) { }

  generateForm(template: Types) {

    // this.objectForm = this.fb.group({
    //   strClassID: [this.template?.strClassID],
    //   sysAddrID: [this.template?.sysAddrID],
    //   strName: [this.template?.strName],
    //   strDesc: [this.template?.strDesc],
    //   IsActive: [this.template?.IsActive],
    //   strAlias: [this.template?.strAlias]
    // });
    // this.objectForm = this.fb.group(Object.create())

    this.fields = Object.keys(template).reduce<(keyof Types | {value: String, disabled: boolean})[][]>((acc, val) => {
      // @ts-ignore
      acc.push([val, template[val]])
      return acc;
    }, [])

    console.log(this.fields);

    this.objectForm = this.fb.group(this.fields)
  }

  async ngOnChanges() {
    this.template = undefined;
    this.template = await this.api.getObjectForAdd(this.object!.sysAddrID, 'TApcFolder').toPromise();
    this.generateForm(this.template);
    console.log(this.template)
  }

}
