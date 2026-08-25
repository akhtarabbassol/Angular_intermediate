import { Component, input } from "@angular/core";

@Component({
    selector:'child-app',
    templateUrl :'child.html' ,
    styleUrl:'child.css'
})

export class Child{
   userName = input<string>("");
   userEmail= input<string>("")
}