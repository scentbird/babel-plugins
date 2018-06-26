import path from 'path'
import { transformFileSync } from '@babel/core'
import plugin from '../src'


const examplePath = path.resolve(__dirname, 'example.js')

const output = transformFileSync(examplePath, {
  plugins: [ plugin ],
  babelrc: false,
  retainLines: false,
})

// const foo = 'smth' --> console.log("'smth' assigned to foo")
console.log(output.code)
