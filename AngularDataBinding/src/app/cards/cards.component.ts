import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
   name:string ="DataBinding";
   imgSrc:string='../../assets/images/ry-1.jpg';
   content:string ="Labore mollit voluptate elit commodo consequat.Mollit pariatur tempor minim sunt magna irure aliquip aliquip qui ex proident voluptate veniam. Sit tempor proident exercitation consequat aliquip irure aliqua. Culpa velit sit laborum occaecat deserunt irure est. Veniam ex exercitation nostrud irure in incididunt ipsum voluptate occaecat in reprehenderit nostrud consectetur esse. Officia nisi nisi minim veniam aute deserunt aute enim qui mollit esse Enim dolore eiusmod dolore esse laborum enim. Do aliquip voluptate officia amet culpa do irure nostrud officia ea excepteur nostrud enim veniam. Non et deserunt cupidatat culpa duis laboris. Exercitation sint proident irure sunt eu culpa dolore.";
   counter:number=0;
   counterId:number;
   isCounterStarted:boolean=false;
   message:string="";
   smsMessage:string="";
   inputType:string="password";
   inputRange:number=0;
   constructor() { }

  ngOnInit(): void {
  }
  public showPassword(){
    (this.inputType==='password')?this.inputType='text':this.inputType='password';
  }
  public doStart():any{
    if(!this.isCounterStarted){
      this.counterId= setInterval(()=>{
          this.counter = this.counter+1;
          this.isCounterStarted=true;
       },100)
       
      }
  }
  public doStop():any{
        clearInterval(this.counterId);
        this.isCounterStarted=false;
  }
  public doReset():any{
          this.counter =0;
          this.isCounterStarted=false;
  }

  public displayText(event){
         this.message=event.target.value;
  }

  /* public displayDate:any{
    return getLocaleDateFormat();
  }
  public displayDay():void{
       return ;
  }
  public displayYear():void{
       return ;
  } */

}
