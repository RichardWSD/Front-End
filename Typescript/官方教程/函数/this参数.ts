interface UIElement {
  addClickListener(onclick: (this: void, e: Event) => void): void;
}

class Handler {
  info: string;
  onClickBad(this: Handler, e: Event) {
    // oops, used this here. using this callback would crash at runtime
    // this.info = e.message;
    console.log(this.info);
  }
}
let h = new Handler();
let uiElement: UIElement = {} as any;
uiElement.addClickListener(h.onClickBad); // error!
