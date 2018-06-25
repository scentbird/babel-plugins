export default function ({ types: t }) {

  return {

    visitor: {

      VariableDeclaration(path) {
        if (path.node.kind === 'const' && path.node.declarations.length > 1) {
          const newDeclarations = path.node.declarations.map((declaration) => (
            t.variableDeclaration('const', [declaration])
          ))

          path.replaceWithMultiple(newDeclarations)
        }
      }
    }
  }
}
