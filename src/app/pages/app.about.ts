import { Component } from '@angular/core';

@Component({
  selector: 'my-about',
  templateUrl: `./app/pages/about.html`,
})
export class aboutComponent{
  private projectName : string;

  constructor() {
    this.projectName = "NavBar Angular 2";
  }
}
