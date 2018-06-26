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
