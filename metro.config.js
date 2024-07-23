/* eslint-disable no-undef */
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.assetExts.push(
  // Adds support for `.log` files
  'log'
);

module.exports = config;
