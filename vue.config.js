const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, './www'),
  devServer: {
    allowedHosts: 'all', // This allows all hosts
    disableHostCheck: true, // This disables the host check. Use with caution.
  },
};
