import { Component } from "@angular/core";
import { childApp } from "./Components/child";


export interface userinfo{
  Name  : string ;
  Email : string ;
  Phone : number ;
}

@Component({
  selector:'app-root',
  imports:[childApp] ,
  templateUrl:'app.html',
  styleUrl:'app.css'  
})

export class App{
  username:string = ""
  useremail:string = ""
  userphone:number = 0
  User:userinfo = {
    Name:'' ,
    Email: '',
    Phone: 0
  }
  SendData(username:string , useremail:string , userphone:number){
   this.User={
    Name : username ,
    Email: useremail ,
    Phone : userphone ,
   }
  }
}