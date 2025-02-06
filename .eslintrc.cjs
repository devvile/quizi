module.exports = {
  // Define the environments your code runs in. Each environment brings with it a set of global variables.
  env: {
    browser: true, // If your project runs in the browser
    node: true,    // If you’re using Node.js
    es2021: true,  // ES2021 global variables and features
  },
  
  // Extending a set of core rules from ESLint or other configs like airbnb, google, etc.
  extends: [
    'eslint:recommended',
    'plugin:react/recommended', // Uncomment if using React
    //'plugin:@typescript-eslint/recommended' // Uncomment if using TypeScript
  ],
    
  // Specify the parser and parser options
  parserOptions: {
    sourceType: 'module', // Enables ES modules 
  },
  
  // Additional plugins can be specified here (e.g., react, @typescript-eslint)
  plugins: [
    'react',
    // '@typescript-eslint',
  ],
  
  // Custom rules configuration
  rules: {
    // Example: enforce semicolons
    'semi': ['error', 'always'],
    // Example: enforce double quotes
    'quotes': ['error', 'single'],
    'react/react-in-jsx-scope': 'off',
    'indent': [
      'error',
      2,
      {
        SwitchCase: 1,          // indent switch-case by 1 level
        VariableDeclarator: 1,  // indent multi-line variable declarations
        outerIIFEBody: 1,
        FunctionDeclaration: {
          parameters: 'first',  // indent function parameters (or "off", "first", "after-used")
          body: 1,
        },
        FunctionExpression: {
          parameters: 'first',
          body: 1,
        },
        CallExpression: {
          arguments: 'first',
        },
        MemberExpression: 1,
        flatTernaryExpressions: false,
        ignoredNodes: [
          'TemplateLiteral *', // example if you want to ignore indentation inside template literals
        ],
        ignoreComments: false,
      },
    ],
    // Add or modify other rules as needed
  },
};
  