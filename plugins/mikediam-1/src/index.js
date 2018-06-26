export default function ({ types: t }) {

  const transformObject = (node) => {
    const { object, type, left, right } = node

    if (t.isMemberExpression(node)) {
      const isObjectExpression = t.isMemberExpression(object.type)
      const updatedObject = isObjectExpression ? transformObject(object) : object

      return t.LogicalExpression(
        '&&',
        updatedObject,
        node,
      )
    }
    else if (t.isAssignmentExpression(node)) {
      const updatedRight = transformObject(right)

      return t.assignmentExpression(
        '=',
        left,
        updatedRight
      )
    }
    else {
      return node
    }
  }

  return {
    visitor: {

      VariableDeclaration: (path) => {
        path.node.declarations.forEach(({ init }, index) => {
          path.node.declarations[index].init = transformObject(init)
        })
      },

      ExpressionStatement: (path) => {
        const { node: { expression } } = path

        path.node.expression = transformObject(expression)
      }
    }
  }
}
