'use strict';
const merge = require('webpack-merge');
const prodEnv = require('./prod.env');
process.env.PORT = 1501;

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
});
