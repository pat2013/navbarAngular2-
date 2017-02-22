import { Component } from '@angular/core';

@Component({
  selector: 'my-home',
  templateUrl: `./app/pages/home.html`,
})
export class homeComponent{
  private projectName : string;

  constructor() {
    this.projectName = "NavBar Angular 2";
  }
}
