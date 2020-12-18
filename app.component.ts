import { Component, NgModule} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'Housepital';

  constructor(private router: Router) {
     
    setTimeout(() => {
        this.router.navigate(['login']);
    }, 5000);
  
  }
  
}