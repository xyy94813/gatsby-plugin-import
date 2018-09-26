
exports.onCreateBabelConfig = ({ actions }, options) => {
  actions.setBabelPlugin({
    name: `babel-plugin-import`,
    options,
  })
}