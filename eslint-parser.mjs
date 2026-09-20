import babelParser from "@babel/eslint-parser";

export function parseForESLint(code, options) {
  const result = babelParser.parseForESLint(code, options);

  if (result.scopeManager && !result.scopeManager.addGlobals) {
    result.scopeManager.addGlobals = (names) => {
      const globalScope = result.scopeManager.scopes[0];

      for (const name of names) {
        if (globalScope.set.has(name)) continue;

        const variable = {
          defs: [],
          eslintExplicitGlobal: false,
          eslintExplicitGlobalComments: undefined,
          eslintImplicitGlobalSetting: undefined,
          identifiers: [],
          name,
          references: [],
          writeable: false,
        };

        globalScope.set.set(name, variable);
        globalScope.variables.push(variable);
      }
    };
  }

  return result;
}

export const meta = babelParser.meta;

export default { meta, parseForESLint };
