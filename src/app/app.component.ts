import { Component } from '@angular/core';
import { FormGroup,FormControl,FormControlName } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string="  Reactive-Forms";

  saveDetails=new FormGroup({
    name:new FormControl(''),
    lname:new FormControl(''),
    mail:new FormControl(''),
    pwd:new FormControl(''),

  })
  DisplayDetails(){
    console.warn(this.saveDetails.value);
  }
}
