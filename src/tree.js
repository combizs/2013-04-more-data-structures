var makeTree = function(value){
  var newTree = {};
  newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};

var treeMethods = makeTree.prototype;

treeMethods.addChild = function(value){
  var newChildNode = makeTree(value);
  this.children.push(newChildNode);
};

treeMethods.contains = function(value){
  if(this.value === value){
    return true;
  }

  for(var i = 0; i < this.children.length; i++) {
    if(this.children[i].contains(value)) {
      return true;
    }
  }

  // _.each(this.children, function(item, index){
  //   if(item.contains(value)){
  //     console.log(value);
  //     return true;
  //   }
  // });

  return false;

};

