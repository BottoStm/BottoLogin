const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, './www'),
  devServer: {
    allowedHosts: ['all'], // Correct format: 'all' within an array
    disableHostCheck: true, // This disables host checking, not recommended for production
  },
};
