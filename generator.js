module.exports = (api, options, rootOptions) => {
  // modify package.json fields
  api.extendPackage({
    dependencies: {
      'aws-amplify': '^2.2.6',
      'aws-appsync': '^3.0.2',
      graphql: '^14.6.0',
      'vue-apollo': '^3.0.0',
      'vue-router': '^3.1.6'
    },
    devDependencies: {
      'graphql-tag': '^2.9.0',
      'eslint-plugin-graphql': '^3.1.0'
    }
  })

  // copy and render all files in ./template with ejs
  // api.render('./template')

  if (options.foo) {
    // conditionally generate files
  }
}
