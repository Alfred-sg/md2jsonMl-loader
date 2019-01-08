const { getOptions } = require('loader-utils');
const validateOptions = require('schema-utils');
const MT = require('mark-twain');

// const schema = require('./options');

module.exports = function md2jsonMlLoader(source){
  const options = getOptions(this) || {};

  // validateOptions(schema, options, 'Md2jsonMl Loader');

  const jsonMl = JSON.stringify(MT(source));
  console.log(jsonMl)
  return `module.exports = ${jsonMl}`;
};