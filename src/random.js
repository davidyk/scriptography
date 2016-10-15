'use strict';

var base64 = require('./base64');

var random = {};

random.integer = function (min, max ) {

  if (max === undefined) {
    var minimum = 0;
    var maximum = min;
    // console.log("min", min);
    // console.log("max", max);

  } else {
    var minimum = min;
    var maximum = max;
  }

  var range = maximum - minimum;

  return minimum + Math.round( range * (Math.random()) );

};

var charSet = base64._charSet;

random.base64 = function (val) {

  var output = "";
  for (var i = 0; i < val; i++) {
    output += charSet.charAt(random.integer(0,charSet.length - 1));
  }
  // console.log("output", output)
  return output;

};

module.exports = random;
