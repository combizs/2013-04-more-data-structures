var makeTree = function(){
  var newTree = {};
  newTree = Object.create(treeMethods);
  newTree.value = undefined;
  newTree.children = [];
  return newTree;
};

var treeMethods = makeTree.prototype;

treeMethods.addChild = function(value){
  if(this.value === undefined){
    this.value = value;
    return;
  }
  var newChildNode= makeTree();
  newChildNode.value = value;
  this.children.push(newChildNode);
};

treeMethods.contains = function(value){
  //return true;
};

