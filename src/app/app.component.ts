import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  form: FormGroup;
  resourceQuantity: any;

  constructor() {

  }
  ngOnInit() {
    this.form = new FormGroup({
            'employeeId': new FormControl(null, {validators: [Validators.required]}),
            'employeeName': new FormControl(null, {validators: [Validators.required]}),
            'resourceQuantity': new FormControl(null, {validators: [Validators.required]}),
            'resourceId': new FormControl(null, {validators: [Validators.required]})
        });
  }

  somethingChanged() {
        console.log(this.resourceQuantity);
    }

    counter(i: number) {
        return new Array(i);
    }
}
