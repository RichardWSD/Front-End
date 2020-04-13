import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit,OnChanges {

  // 输入属性，他的值应该由外部传入
  @Input()
  private rating: number = 0;
  @Output()
  private ratingChange: EventEmitter<number> = new EventEmitter();

  private stars: boolean[];
  @Input()
  private readonly: boolean = true;

  constructor() { }

  ngOnInit() {
    // this.stars = [];
    // for (let i = 1; i <= 5; i++) {
    //   this.stars.push(i > this.rating);
    // }
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
  }

  clickStar(index: number) {
    if (!this.readonly) {
      this.rating = index + 1;
      //this.ngOnInit();
      this.ratingChange.emit(this.rating);
    }
  }

}
