import { Component, input } from "@angular/core";
import { userinfo } from "../app";


@Component({
    selector:'child-app' ,
    templateUrl:'child.html',
    styleUrl:'child.css'
})

export class childApp{
  user1=input<userinfo>()
}