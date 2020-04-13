import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input } from '@angular/core';

let logIndex: number = 1;

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

  @Input()
  name: string;

  logIt(msg: string) {
    console.log(`#${logIndex} ${msg}`);
  }

  constructor() {
    this.logIt("name属性在constructor里的值是：" + this.name);
  }

  ngOnInit() {
    this.logIt("ngOnInit");
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    let name = changes['name'].currentValue;
    this.logIt("name属性在constructor里的值是：" + name);
  }
  ngDoCheck(): void {
    this.logIt("ngDoCheck");
  }
  ngAfterContentInit(): void {
    this.logIt("ngAfterContentInit");
  }
  ngAfterContentChecked(): void {
    this.logIt("ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
    this.logIt("ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    this.logIt("ngAfterViewChecked");
  }
  ngOnDestroy(): void {
    this.logIt("ngOnDestroy");
  }


}
