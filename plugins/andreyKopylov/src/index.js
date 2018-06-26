export default function ({ types: t }) {

  return {
    visitor: {
      VariableDeclaration(path) {

        // Get main variable data
        const { id, init } = path.node.declarations[0];

        // check destructuring and object depth
        if (t.isObjectPattern(id) && t.isIdentifier(init)) {

          // Get properties array
          const { properties } = id;

		      const code = properties.map(({ value: { name } }) => {

            const type = 'Identifier'

            // Create data object after "="
            const variableMembers = t.memberExpression(
              { type, name: init.name },
              { type, name }
            )

            // Create variable object
            const variable = t.variableDeclarator(
              { type, name },
              variableMembers
            )

          	// Create variable type var/const/let
            return t.variableDeclaration(path.node.kind, [ variable ])
          })

          // Set multiple code
          path.replaceWithMultiple(code);
        }
      }
    }
  };
}
