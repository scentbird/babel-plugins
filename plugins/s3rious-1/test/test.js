import path from 'path'
import { transformFileSync } from '@babel/core'
import plugin from '../src'


const examplePath = path.resolve(__dirname, 'example.js')

const output = transformFileSync(examplePath, {
  plugins: [ plugin ],
  babelrc: false,
  retainLines: true,
})


/*
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
*/
console.log(output.code)
