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

  return {

    visitor: {

      MemberExpression: (path) => {
        const isParentLogicalExp  = t.isLogicalExpression(path.parent)
        const isParentMemberExp   = t.isMemberExpression(path.parent)

        if (!isParentLogicalExp && !isParentMemberExp) {
          path.replaceWith(transformObject(path.node))
        }
      }
    }
  }
}
