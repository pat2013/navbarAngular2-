import { Component } from '@angular/core';

@Component({
  selector: 'my-jumbo',
  templateUrl: `./app/jumbotron/jumbotron.html`,
})

export class jumbotronComponent  {
  private jbtHeading: string;
  private jbtText: string;
  private jbtBtnText: string;
  private jbtBtnUrl: string;

  constructor() {
     this.jbtHeading = "Hello World!";
     this.jbtText = "Pellentesque habitant morbi tristique senectus et netus et.";
     this.jbtBtnText = "Read More";
     this.jbtBtnUrl = "http://test.com"
  }

}
