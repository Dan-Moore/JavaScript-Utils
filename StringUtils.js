/*
  A simple utility library for working with strings.

  This was made because I wanted something similar to Apache commons.
  Probably not bullet proof, so on the off chance someone is viewing this or
  want to use it, becareful.
*/
var StringUtils = {
  
  /*
   * Checks if the input type is a string
   */
  'isString': function(input) {
    return "string" === (typeof input);
  },
  
  /*
   * Checks if the input is null
   */
  'isNull': function(input) {
    return null === input;
  },
  
  /*
   * Checks if the input isn't null
   */
  'isNotNull': function(input) {
    return !this.isNull(input);
  },
  
  /*
   * Checks if the input is empty
   */
  'isEmpty': function(input) {
    return !!input;
  },
  
  /*
   * Checks if the input isn't empty
   */
  'isNotEmpty': function(input) {
    return !input;
  },
  
  /*
   * Checks if the input is a blank string
   */
  'isBlank': function(input) {
    return this.isNull(input) || !/\S/.test(input);
  },
  
  /*
   * 
  */
  'isNotBlank': function(input) {
    return !this.isBlank(input);
  },
  
  /*
   * Checks if the input contains only numbers
  */
  'isNumeric': function(input) {
    return !isNaN(input);
  },
  
  /*
   * Checks if the input doesn't contains only numbers 
  */
  'isNotNumeric': function(input) {
    return isNaN(input);
  },
  
  /*
   * Checks if the input consits of letters only 
  */
  'isAlpha': function(input) {
    return this.isNotBlank(input) && /^[a-zA-Z/s]+$/.test(input);
  },
  
  /*
   * Checks if the input doesn't consits of letters 
  */
  'isNotAlpha': function(input) {
    return !this.isAlpha(input);
  },
  
  /*
   * Checks if the input contains only letters and numbers. 
  */
  'isAplhaNumeric': function(input) {
    return this.isNotBlank(input) && /^[a-zA-Z0-9?/\S]+$/.test(input);
  },
  
  /*
   * Checks if the input doesn't contain only letters or numbers 
  */
  'isNotAlphaNumeric': function(input) {
    return !this.isAlphaNumeric(input);
  }
};
