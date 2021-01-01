import { Component, OnInit } from '@angular/core';
import { iContact } from '../models/contact.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  contact:iContact ={
    name:"",
    email:"",
    mobile:""
  }

  constructor() { }

  ngOnInit(): void {
  }

  public registerContact(){
          console.log(this.contact);
  }

}
