export default function ({ types: t }) {
  
  return {
    visitor: {
      VariableDeclarator(path) {
        const { node: { id, init } } = path
        
        if (init) {
          const { type } = init
  
          if (type !== 'ObjectExpression') {
            path.replaceWith(
              t.variableDeclarator(
                id,
                t.objectExpression([
                  t.objectProperty(
                    t.identifier(id.name),
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
}
