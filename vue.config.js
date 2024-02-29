const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, './www'),
  devServer: {
    allowedHosts: 'all', 
    disableHostCheck: true,
  },
};
