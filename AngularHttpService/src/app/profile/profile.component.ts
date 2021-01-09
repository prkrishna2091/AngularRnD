import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProfile } from './profile.model';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profiles:IProfile[];

  constructor(private pService:ProfileService) { }

  ngOnInit(): void {
         this.pService.getProfiles().subscribe((data)=>{
           this.profiles = data;
         },(error:HttpErrorResponse)=>{
           alert(error);
         });
  }

}
