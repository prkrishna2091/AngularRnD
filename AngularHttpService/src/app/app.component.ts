import { Component, Injector } from '@angular/core';
import { AppService } from './app.service';
import { iCountry } from './app.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularHttpService';
  message:string=this.aService.welcomeMsg();

  country:iCountry;
  countryList:any;
  
  ngOnInit(){
    this.aService.getCountriesList().subscribe((data)=>{
      this.countryList=data;
      console.log(this.countryList);
    },(errResp:HttpErrorResponse)=>{
              console.log(errResp);
    });
  }

  constructor(private aService:AppService){

  }

  getWelcomeMsg(){
    console.log("Inside Component");
    this.message=this.aService.welcomeMsg();
    console.log(this.aService.welcomeMsg());
  }

  getCountriesList(){
    this.aService.getCountriesList().subscribe((data)=>{
      this.countryList=data;
      console.log(this.countryList);
    })
  }

  
}
