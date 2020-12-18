import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../patient.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any

  
  constructor(private router: Router, private service: PatientService,
    private toastr: ToastrService) {
    this.user = { patientId: '', password: '' };

  }

  patientId: any;
  patient: any;
  local: any;
  loginIds: any;
  ngOnInit(): void {
   
  }


  loginSubmit(loginForm: any) {


    if (loginForm.loginId == 'admin' && loginForm.password == 'admin') {
      this.router.navigate(['admin-page']);
      this.toastr.success('You have logged in successfully...', 'Login');
    }
    else {

      this.service.patientLogin(loginForm.patientId, loginForm.password).subscribe((result: any) => {

        this.patient = result; this.local.setLocal(JSON.stringify(this.patient)); console.log(this.patient);
        if (this.patient) {

          this.router.navigate(['product']);
          this.toastr.success('You have logged in successfully...', 'Login');
        } else {
          if (this.patientId.includes(loginForm.patientId)) {
            this.toastr.error('Invalid credentials!', 'Login');
          }
          else {
            this.toastr.error('Account Does not exist');
          }


        }
      });


    }

  }
}