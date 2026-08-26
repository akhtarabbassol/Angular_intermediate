import { Component, input, output } from "@angular/core";

@Component({
  selector:"child-app",
  templateUrl:'child.html',
  styleUrl:'child.css'
})

export class ChildApp{
  Product:string = "Mobile"
  Quentity=input<number>(0) 
  price=input<number>(0)
}