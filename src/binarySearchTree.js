var BinarySearchTree = function(value){
  this.value = value;
  this.right = null;
  this.left = null;

};


BinarySearchTree.prototype.insert = function(value) {
  if(value <= this.value){
    this.left = new BinarySearchTree(value);  
  }
  else{
    this.right = new BinarySearchTree(value);
  }
  

};

BinarySearchTree.prototype.contains = function(value){
  if(this.value === null){
    return false;
  }
  if(this.value === value){
    return true;
  }

   
  if(this.left.contains(value)){
    return true;
  }
  
  if(this.right.contains(value)){
    return true;
   }

};

BinarySearchTree.prototype.depthFirstLog = function(){

};


