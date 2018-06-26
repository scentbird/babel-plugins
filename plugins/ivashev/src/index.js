export default function ({ types: t }) {

  const parseObjectPattern = ({ properties }) => {
    let result = '{ '

    properties.map((property) => {
      result += property.key.name

      if (t.isObjectPattern(property.value)) {
        result += `: ${parseObjectPattern(property.value)}`
      }
      else if (t.isIdentifier(property.value)) {
        if (property.key.name !== property.value.name) {
          result += `: ${property.value.name}`
        }
      }
      else if (t.isAssignmentPattern(property.value)) {
        result += ' = '
      }
    })

    result += ' }, '

    return result
  }

  const cutTwoLastSymbols = (string) => string.substr(0, string.length - 2)

  return {

    visitor: {
      VariableDeclaration(path) {
        let comment = ''

        path.node.declarations.forEach(({ id, init }) => {

          if (t.isIdentifier(id)) {
            comment += `${id.name} = `
          }
          else if (t.isObjectPattern(id)) {
            comment += `${cutTwoLastSymbols(parseObjectPattern(id))} = `
          }

          if (t.isLiteral(init)) {
            const isString = t.isStringLiteral(init)

            comment += `${isString ? `'` : ''}${init.value}${isString ? `'` : ''}, `
          }
          else if (t.isObjectExpression(init)) {
            comment += `${parseObjectPattern(init)}`
          }
        })

        if (!comment.length) {
          return
        }

        comment = ` ${cutTwoLastSymbols(comment)}`

        path.node.leadingComments = path.node.leadingComments || []
        path.node.leadingComments.push({ type: 'CommentLine', value: comment })
      }
    }
  }
}
