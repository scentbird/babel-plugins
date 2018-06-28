export default function ({ types: t }) {

  const transformObject = (node) => {
    const { object } = node

    const isObjectMemberExpression = t.isMemberExpression(object)

    return t.LogicalExpression(
      '&&',
      isObjectMemberExpression ? transformObject(object) : object,
      node,
    )
  }

  const transforms = []

  return {

    visitor: {

      Program: {
        exit: (path) => {
          transforms.forEach((path) => {
            path.replaceWith(transformObject(path.node))
          })
        }
      },
      MemberExpression: (path) => {
        const isParentMemberExp = t.isMemberExpression(path.parent)

        if (!isParentMemberExp) {
          transforms.push(path)
        }
      }
    }
  }
}
