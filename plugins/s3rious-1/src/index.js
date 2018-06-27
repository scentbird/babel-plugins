export default function ({ types: t }) {
  
  return {
    visitor: {
      VariableDeclarator(path) {
        const { node: { id, init } } = path
        
        if (init) {
          if (t.isObjectExpression(init)) {
            return null
          }
          
          path.replaceWith(
            t.variableDeclarator(
              id,
              t.objectExpression([
                t.objectProperty(
                  id,
                  init,
                )
              ])
            )
          )
        }
      }
    }
  }
}
