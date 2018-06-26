// empties
// const empty0; const cannot be empty
let empty1;
var empty0;

// singular
const foo = 1;
let bar = '1';
var baz = null;

// group
const
  foo1 = {},
  bar1 = [],
  baz1 = foo1 = bar1 = { foobarbaz: 123 };

let
  foo2 = new Date(),
  bar2 = Date,
  baz2 = window;

var
  foo3 = 1,
  bar3 = /2/,
  baz3 = /3/g;
