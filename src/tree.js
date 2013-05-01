var treeMethods = {};
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



var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

