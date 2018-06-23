export default function ({ types: t }) {

  const createAssignmentPattern = (leftPart) =>
    t.assignmentPattern(
      leftPart,
      t.objectExpression([]),
    )

  return {

    visitor: {

      'ArrowFunctionExpression|FunctionDeclaration'(path) {
        path.node.params.forEach((param, index) => {
          if (t.isObjectPattern(param)) {
            path.node.params[index] = createAssignmentPattern(param)
          }
        })
      },

      ObjectProperty(path) {
        if (path.node.value && t.isObjectPattern(path.node.value)) {
          path.node.value = createAssignmentPattern(path.node.value)
        }
      }
    }
  }
}
