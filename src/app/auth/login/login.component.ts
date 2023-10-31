import { Component, OnInit } from '@angular/core';
import { Validators,FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(){
    this.loginForm = new FormGroup({
      'login': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
  });
  }
   
  ngOnInit(): void {
    
  }
  
  onSubmit(form: any) {
    if (form.valid) {
      // Handle form submission here (e.g., send data to the server)
      console.log('Form submitted:', form.value);
    }
  }
}
