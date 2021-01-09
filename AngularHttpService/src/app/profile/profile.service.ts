import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from "rxjs";
import { IProfile } from './profile.model';

@Injectable({
    providedIn:'root'
})

export class ProfileService{
    profilesURL:string="https://gist.githubusercontent.com/prkrishna2091/7cf0627bb5ba1424f14e507bbcc674d4/raw/dbf7cf468450121979920c836dcdc47809769dca/person.json";
    constructor(private http:HttpClient){};

     public getProfiles():Observable<IProfile[]>{
         return this.http.get<IProfile[]>(this.profilesURL);
     }
}