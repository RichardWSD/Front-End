const addMultipleListeners = (el, types, listener, options, useCapture) => {
  types.forEach(type =>
    el.addEventListener(type, listener, options, useCapture)
  );
};

addMultipleListeners(
  document.querySelector('.my-element'),
  ['click', 'mousedown'],
  () => { console.log('hello!') }
);