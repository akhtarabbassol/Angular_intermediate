import { Component } from "@angular/core";
import { Child } from "./Components/child";



@Component({
  selector :'app-root' ,
  imports:[Child] ,
  templateUrl:'app.html' ,
  styleUrl:'app.css'
})

export class App{
    Name:string ="";
    email:string ="";
    ChildName:string =""
    ChildEmail:string = ""
   Send(Name:string , email:string){
     this.ChildName = Name 
     this.ChildEmail = email
   }
}