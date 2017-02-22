import { Component } from '@angular/core';

@Component({
  selector: 'my-nav',
  templateUrl: `./app/nav/nav.html`,
})
export class navComponent{
  private projectName : string;

  constructor() {
    this.projectName = "NavBar Angular 2";
  }
}
