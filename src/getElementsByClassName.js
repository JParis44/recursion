// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var result = [];
  var recursiveSearch = function(node, targetClass){
    if (node.classList.contains(targetClass)) {result.push(node);}     //Base case
    if (node.hasChildNodes()) {
      var children = node.childNodes;
      for (var i = 0; i < children.length; i++) {
        if (children[i].nodeType === 1) {
          recursiveSearch(children[i], targetClass);
        }
      }
    }
  };

  recursiveSearch(document.body, className);

  return result;
};
