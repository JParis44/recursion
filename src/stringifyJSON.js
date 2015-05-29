// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var objType = typeof obj;
  var result = '';
  
  //Base cases
  if (objType === 'string') {return '\"' + obj + '\"';}
  if (objType === 'number' || objType === 'string' || objType === 'boolean') {
    return obj.toString();
  } else if (objType === 'object') {
    if (obj === null) {return 'null';}
    //Arrays (recursive)
    if (Array.isArray(obj) === true) {
      result = '';
      obj.forEach(function (item, index, arr) {
        result += stringifyJSON(item) + ',';                  //Recursion call
      });
      return '[' + result.slice(0, -1) + ']';
    } else {
      // Objects (recursive)
      result = '';
      for (var key in obj) {
        if (!(typeof obj[key] === 'function' || obj[key] === undefined)) {
          result += '\"' + key + '\":';
          result += stringifyJSON(obj[key]) + ',';            //Recursion call
        }
      }
      return '{' + result.slice(0, -1) + '}';
    }
  }
  return '';
};
