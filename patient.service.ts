import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgModule} from '@angular/core';
 

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  patient:any;
  getPatientLoginId() {
    throw new Error('Method not implemented.');
  }
  PatientLogin(emailId: string ,password: string):any{
    return this.httpClient.get('RESTAPI/webapi/myresource/LoginPatient/'+ emailId + '/' + password);
  }

  constructor(private httpClient: HttpClient) { }

  setPatdetails(user:any){
    return this.patient = user;
  }
  getPatdetails(){
    return this.patient;
  }

  registerPatient(patient : any) {
    return this.httpClient.post('RESTAPI/webapi/myresource/registerPatient', patient);
  }
  
  getPatientEvents(patient:any){
    return  this.httpClient.get('RESTAPI/webapi/myresource/getPatientEvents/'+ patient.patientId);
   }
   patientLogin(patientId: string,password: string):any{
    return this.httpClient.get('RESTAPI/webapi/myresource/loginPatient/'+ patientId + '/' + password);
  }
   getPatientByID(patient:any):any{
    return this.httpClient.get('RESTAPI/webapi/myresource/getPatientByID/' + patient.patientId);
   }
   emptyobject(){
    this.patient = null;
  }

}
