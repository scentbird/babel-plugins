import path from 'path'
import { transformFileSync } from '@babel/core'
import plugin from '../src'


const examplePath = path.resolve(__dirname, 'example.js')

const output = transformFileSync(examplePath, {
  plugins: [ plugin ],
  babelrc: false,
  retainLines: true,
})


// const bar = foo && foo.bar;
//
// const zoo = foo && foo.bar && foo.bar.zoo;
//
// let asd = foo && foo.bar && foo.bar.asd,
//   asd2 = foo && foo.bar2;
//
// asd = foo && foo.bar && foo.bar.zoo && foo.bar.zoo.asd;
console.log(output.code)
