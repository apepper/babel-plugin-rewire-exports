var foo = function foo() {
  return bar();
};

export { foo as default };

var bar = function bar() {
  return baz;
};

export { bar };


var baz = true;

export { bar as qux, baz };

var whatsit = class whatsit extends foo {};
export { whatsit };
var _default = foo,
    _bar = bar,
    _qux = bar,
    _baz = baz,
    _whatsit = whatsit;
export function rewire($stub) {
  foo = $stub;
}
export function rewire$bar($stub) {
  bar = $stub;
}
export function rewire$qux($stub) {
  bar = $stub;
}
export function rewire$baz($stub) {
  baz = $stub;
}
export function rewire$whatsit($stub) {
  whatsit = $stub;
}
export function restore() {
  foo = _default;
  bar = _bar;
  bar = _qux;
  baz = _baz;
  whatsit = _whatsit;
}