class Animal {
  name: string;
  body: string = 'abc'
  constructor(theName: string) { this.name = theName; }
}

class Bird extends Animal {
  constructor(name: string) { super(name); }
}

class SuperBird extends Bird {
  constructor(name: string) { super(name); }
  fly() {
    console.log('fly ===> ', this.name, this.body);
    
  }
}

new SuperBird('lili').fly()