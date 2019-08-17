import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  applicationForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.applicationForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }
  getFormData(control){
    return this.applicationForm.get(control).value;
  }
  submitBtn(){debugger
    if(this.applicationForm.valid){
      document.getElementById('formPreview').style.display = 'block'
    } else {
      alert('please enter valid data')
    }
  }
}
