const breaks = require('remark-breaks');

module.exports = ({ markdownAST }, pluginOptions) => {
  breaks(pluginOptions)(markdownAST);
};
