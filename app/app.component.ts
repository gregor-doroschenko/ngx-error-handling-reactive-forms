import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MyFormErrorMessage } from './myform-error-messages';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  
  myForm: FormGroup;

  errors: { [key: string]: string } = {};

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.myForm = this.fb.group({
      name: [null, [Validators.required, Validators.maxLength(255)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(12)]]
    });
    this.myForm.statusChanges.subscribe(() => this.updateErrorMessages());
  }

  submitForm() { }

  updateErrorMessages() {
    this.errors = {};
    for (const message of MyFormErrorMessage) {
      const control = this.myForm.get(message.forControl);
      if (control &&
          control.pristine &&
          control.dirty &&
          control.invalid &&
          control.errors[message.forValidator] &&
          !this.errors[message.forControl]) {
        this.errors[message.forControl] = message.text;
      }
    }
  }
}
