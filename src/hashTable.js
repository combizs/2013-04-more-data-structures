var HashTable = function(){
  this._limit = 8;

  // Use a limited array to store inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // alerts 'hi'
  //
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value){
  var index = getIndexBelowMaxForKey(key, this._limit);
    //returns array of whats in the index
  if(this._storage.get(index)!==undefined){
  
    var array = this._storage.get(index);
    array.push([key, value]);
    this._storage.set(index, array);
  }
  else {
    //sets array at index if nothing exists
    var newArray = [];
    newArray.push([key, value]);
    this._storage.set(index, newArray);
  }
};

HashTable.prototype.retrieve = function(key){
  var index = getIndexBelowMaxForKey(key, this._limit);
  var array =  this._storage.get(index);
   if(array=== undefined){
    return false;
  }
  for(var i = 0; i < array.length; i++){

    if(array[i][0] === key){
      return array[i][1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(key){
  var index = getIndexBelowMaxForKey(key, this._limit);
  var array =  this._storage.get(index);
  if(array=== undefined){
    return false;
  }
  for(var i = 0; i < array.length; i++){

    if(array[i][0] === key){
      array.splice(i);
      return true;
    }
  }
  return false;

};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you