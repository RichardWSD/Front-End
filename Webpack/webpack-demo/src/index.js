import _ from 'lodash';
import './style/style.css';
import './style/a.scss';
import { a, b, c } from '@/b';
import $ from 'jquery';

function createDomElement() {
  var dom = document.createElement('div');
  dom.innerHTML = _.join(['aicoder', '.com', ' wow'], '');
  dom.className = 'box';
  return dom;
}

document.body.appendChild(createDomElement());
console.log(2222222222);

class Temp {
  show() {
    console.log('this.Age :', this.Age);
  }

  get Age() {
    return this._age;
  }

  set Age(val) {
    this._age = val + 1;
  }
}

const t = new Temp();
t.Age = 19;

t.show();

console.log('a:', a);
console.log('b:', b);
console.log('c:', c);

$(function() {
  console.log('jq');
  $('.box').click(function() {
    alert('111');
  });
});
