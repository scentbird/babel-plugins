export default function ({types: t}) {

  const varTypeToTransform = 'const'

  const getValue = (declarationInit) => {
    if (t.isArrowFunctionExpression(declarationInit) || t.isFunctionExpression(declarationInit)) {
      return 'Function'
    }
    else if (t.isObjectExpression(declarationInit)) {
      return 'Object'
    }
    else if (t.isArrayExpression(declarationInit)) {
      return 'Array'
    }
    else if (t.isNullLiteral(declarationInit)) {
      return 'null'
    }

    return declarationInit.value
  }

  return {

    visitor: {

      VariableDeclaration(path) {
        const kind = path.node.kind
        const declarations = path.node.declarations

        if (kind === varTypeToTransform) {
          let content = declarations.map((declaration) => {
            const value = getValue(declaration.init)
            const id = declaration.id.name

            return t.stringLiteral(`'${value}' assigned to ${id}`)
          })

          const replaceNode = t.expressionStatement(
            t.callExpression(t.memberExpression(
              t.identifier('console'), t.identifier('log')),
              content
            )
          )

          path.replaceWith(replaceNode)
        }
      },

    },
  }
}
