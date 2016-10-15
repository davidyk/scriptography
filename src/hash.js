'use strict';

var base64 = require('./base64');
var utils = require('./utils');

var hash = {};

hash.simple = {};

hash.simple._pad = function (text, length) {
  var reverseText = text.split("").reverse().join("");
  // console.log("reverseText", reverseText);

  var output = text;

  while (output.length < length) {
    output += reverseText
  }

  // console.log("output before slice", output);
  return output

};

hash.simple._partition = function (text, length) {

  var slicedText = "";
  var array = [];

  while (text != "") {
    slicedText = text.slice(0, length);
    text = text.slice(length);
    array.push(slicedText);
  }

  return array;
};

hash.simple._combine = function (string1, string2) {

  var short = (string1.length < string2.length) ? string1 : string2;

  var long = (string1.length < string2.length) ? string2 : string1;

  var array = base64.toDigits(short).map( function (el, index) {
    // console.log("el", el);
    // console.log("long[index]", long[index]);

    var value = el ^ base64._charSet.indexOf(long[index]);
    // console.log("el ^ long[index]", value)

    return value;
  });

  var output = base64.fromDigits(array) + long.slice(short.length);

  // console.log("output", output);
  // console.log("base64.fromDigits(array)", base64.fromDigits(array));
  // console.log("long.slice(short.length)", long.slice(short.length));

  return output;

  // while (Math.min(string1.length, string2.length) != 0) {
  //   var num1 = base64._charSet.indexOf(string1[0]);
  //   var num2 = base64._charSet.indexOf(string2[0]);

  //   output += base64._charSet.charAt(num1 ^ num2);

  //   string1 = string1.slice(1);
  //   string2 = string2.slice(1);
  // }

  // return output + string1 + string2;

};

hash.simple.run = function () {};

hash.hmac = function () {};

hash.pbkdf2 = function () {};

module.exports = hash;
