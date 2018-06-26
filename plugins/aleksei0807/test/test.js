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
const foo = 1;
const bar = 2;
*/
console.log(output.code)
