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
