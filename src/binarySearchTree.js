var BinarySearchTree = function(value){
  this.value = value;
  this.right = null;
  this.left = null;

};


BinarySearchTree.prototype.insert = function(value) {
  if(value <= this.value){
    if(this.left === null) {
      this.left = new BinarySearchTree(value);
      return true;
    }
    else {
      this.left.insert(value);
    }
  }
  else{
    if(this.right === null) {
      this.right = new BinarySearchTree(value);
      return true;
    }
    else {
      this.right.insert(value);
    }
  }

};

BinarySearchTree.prototype.contains = function(value){
 
  if(this.value === value){
    return true;
  }
  if(this.left!==null){
    if(this.left.contains(value)){
      return true;
    }
  }

if(this.right!==null){
    if(this.right.contains(value)){
      return true;
    }
  }

  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(callback){
 callback.call(this, arguments);
  if(this.right){
    this.right.depthFirstLog(callback);
  }
  if(this.left){
    this.left.depthFirstLog(callback);
  }
};


