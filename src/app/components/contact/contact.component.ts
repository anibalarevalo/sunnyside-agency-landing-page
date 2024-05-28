import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formDate: FormGroup
  date?: Date
  p?: string

  constructor(private fb: FormBuilder) {
    this.formDate = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required,]],
    })
  }

  submit() {
    console.log(this.formDate)
  }
}
