const foo = ({ a, b }) => {}

function bar({ c, d }) {}

const obj = { a: 1, b: 2 }

const obj2 = { foo, bar }

const { zoo: { e, f } } = obj2
