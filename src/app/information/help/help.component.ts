import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ])   });

  constructor() { }

  ngOnInit() {
  }

  get firstname(){
    return this.form.get('firstName')
  }
  onSubmit(){
    alert(JSON.stringify(this.form.value));
  }

}
