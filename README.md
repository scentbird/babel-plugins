# babel-plugins

[Plugin Handbook](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md)<br />
[Babel Types](https://babeljs.io/docs/en/next/babel-types.html)

---

Input:

```
const foo = ({ a, b }) => {}
```

Output:

```
const foo = ({ a, b } = {}) => {}
```

### [LINK](plugins/pivanov-1)

---

Input:

```
const foo = 2, bar = 'a' , { aaa: { bbb }, ccc } = { a }
```

Output:

```
// foo = 2, bar = 'a' , { aaa: { bbb }, ccc } = { a }
const foo = 2
```

### [LINK](plugins/ivashev)

---

Input:

```
const bar = foo.bar;

const zoo = foo.bar.zoo;

let asd = foo.bar.asd,
    asd2 = foo.bar2;

asd = foo.bar.zoo.asd;
```

Output:

```
const bar = foo && foo.bar;

const zoo = foo && foo.bar && foo.bar.zoo;

let asd = foo && foo.bar && foo.bar.asd,
    asd2 = foo && foo.bar2;

asd = foo && foo.bar && foo.bar.zoo && foo.bar.zoo.asd;
```

### [LINK](plugins/mikediam-1)

---

Input:

```
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

```

Output:

```
// empties
// const empty0; const cannot be empty
let empty1;
var empty0;

// singular
const foo = {
foo: 1
};
let bar = {
bar: '1'
};
var baz = {
baz: null
};

// group
const
foo1 = {},
bar1 = {
  bar1: []
},
baz1 = {
  baz1: foo1 = bar1 = { foobarbaz: 123 }
};

let
foo2 = {
  foo2: new Date()
},
bar2 = {
  bar2: Date
},
baz2 = {
  baz2: window
};

var
foo3 = {
  foo3: 1
},
bar3 = {
  bar3: /2/
},
baz3 = {
  baz3: /3/g
};
```

### [LINK](plugins/s3rious-1)

---
