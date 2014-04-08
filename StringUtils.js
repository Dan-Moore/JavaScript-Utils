/*
  A simple utility library for working with strings.

  This was made because I wanted something similar to Apache commons.
  Probably not bullet proof, so on the off chance someone is viewing this or
  want to use it, becareful.
*/
var StringUtils = {
  'isString': function(input) {
    return "string" === (typeof input);
  },
  
  'isNull': function(input) {
    return null === input;
  },
  
  'isNotNull': function(input) {
    return !this.isNull(input);
  },
  
  'isEmpty': function(input) {
    return !!input;
  },
  
  'isNotEmpty': function(input) {
    return !input;
  },
  
  'isBlank': function(input) {
    return this.isNull(input) || !/\S/.test(input);
  },
  
  'isNotBlank': function(input) {
    return !this.isBlank(input);
  },
  
  'isNumeric': function(input) {
    return !isNaN(input);
  },
  
  'isNotNumeric': function(input) {
    return isNaN(input);
  },
  
  'isAlpha': function(input) {
    return this.isNotBlank(input) && /^[a-zA-Z/s]+$/.test(input);
  },
  
  'isNotAlpha': function(input) {
    return !this.isAlpha(input);
  },
  
  'isAplhaNumeric': function(input) {
    return this.isNotBlank(input) && /^[a-zA-Z0-9?/\S]+$/.test(input);
  },
  
  'isNotAlphaNumeric': function(input) {
    return !this.isAlphaNumeric(input);
  }
};
