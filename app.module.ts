import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule,Routes} from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { HomepageComponent } from './homepage/homepage.component';

import { Observable } from 'rxjs/internal/Observable';


const appRoot:Routes =[{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{ path: '', component: HomepageComponent },
{path:'homepage', component: HomepageComponent},
]


@NgModule({
  imports:      [ 
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoot),
    AppRoutingModule,
    NgModule,
    ToastrModule.forRoot(),
    Observable, 

  ],
  declarations: [ 
    AppComponent, 
    LoginComponent, 
    RegisterComponent, 
  ],
  
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
