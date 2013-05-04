var BinarySearchTree = function(value){
  this.value = value;
  this.right = null;
  this.left = null;
  var breadth = [];

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
  if(this.left){
    if(this.left.contains(value)){
      return true;
    }
  }

if(this.right){
    if(this.right.contains(value)){
      return true;
    }
  }

  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(callback){
 callback.apply(this);
  if(this.right){
    this.right.depthFirstLog(callback);
  }
  if(this.left){
    this.left.depthFirstLog(callback);
  }
};


BinarySearchTree.prototype.breadthFirstLog = function(callback, array){
callback.apply(this, array);
array = array || [];

 var newitem = '0';
 alert(array);
  if(this.left){      //console.log("this: ", this, "val", this.value);
    array.push(this.left);
    // this.left.breadthFirstLog(callback);
  }
  if(this.right){      //console.log("this: ", this, "val", this.value);
array.push(this.right);
    // this.right.breadthFirstLog(callback);
  }
  if(array){
newitem = array[0];
array.shift();
console.log(newitem);
  if(array){
newitem.breadthFirstLog(callback, array);
}


  }
};


