import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../patient.service';
import { ToastrService } from 'ngx-toastr';

import 'rxjs/add/observable/throw'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {
  
  confirmPassword: any;
  loginIds: any;
  registerForm: any;
  mailOptions: any;
  patient: { patientId: string; patientFirstName: string;patientSecondName: string; emailId: string;gender:string;age:string; phoneNum: string; loginId: string; password: string; address: any; };
  address: { state: string; street: string; city: string; houseNo: string; pincode: string; };
  constructor(private router: Router, private service: PatientService,
    private toastr: ToastrService) {

    this.address = { state: '', street: '', city: '', houseNo: '', pincode: '' }
    this.patient = { patientId: '', patientFirstName: '',patientSecondName: '', emailId: '',gender:'',age:'' , phoneNum: '', loginId: '', password: '', address: this.address }
  }

  ngOnInit(): void {   
    
  }

  register(registerForm: any): void {
    console.log(this.patient.emailId);
    localStorage.setItem('emailId',JSON.stringify(this.patient.emailId));
    console.log(this.patient.emailId);
    this.service.registerPatient(this.patient).subscribe((result: any) => { console.log(result); });
    console.log(this.patient);
    this.toastr.success('Registration Successfull!', 'Register');
    this.router.navigate(['login']);  

  }



}
