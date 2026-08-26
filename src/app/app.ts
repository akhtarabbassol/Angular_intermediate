import { Component } from "@angular/core";
import { ChildApp } from "./Components/child";


@Component({
  selector:'app-root',
  templateUrl:'app.html',
  styleUrl:'app.css',
  imports: [ChildApp]
})

export class App{

}