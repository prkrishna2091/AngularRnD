import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { iCountry } from "./app.model";

@Injectable({
    providedIn:"root"
})
export class AppService{
   constructor(private http:HttpClient){

   }

   welcomeMsg():string{
       console.log("Inside Service")
       return "Welcome to Angular Http Service ...!";
   }

    getCountriesList(){
       return this.http.get("https://restcountries.eu/rest/v2/all",{responseType:"json"});
   } 
}