import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  pi: number = 3.1415926;
  birthday: Date = new Date();
  name: string;
  divClass: string;
  isBig: boolean = false;
  divClass2: any = {
    a: false,
    b: false,
    c: false
  };
  isDev: boolean = true;
  size: number = 2;
  divStyle: any = {
    color: 'red',
    background: 'yellow'
  }
  imgUrl: string = "http://placehold.it/400x320";
  aa: boolean = false;

  constructor() {
    setTimeout(() => {
      //this.divClass = "a b c";
      //this.isBig=true;
      // this.divClass2 = {
      //   a: true,
      //   b: true,
      //   c: true
      // }
      this.isDev = false;
      this.divStyle = {
        color: 'yellow',
        background: 'red'
      }
    }, 3000);

    setInterval(() => {
      this.name = "Tom";
    }, 3000);
  }

  ngOnInit() {
  }

  doOnClick(event: any) {
    console.log(event);
  }

  doOnInput(event: any) {
    console.log(event);
    console.log(event.target.value);
    console.log(event.target.getAttribute('value'));

  }

  funaa() {
    this.aa = !this.aa;
    console.log(this.aa);
  }

  doOnInput2(event) {
    this.name = event.target.value;
  }
}
