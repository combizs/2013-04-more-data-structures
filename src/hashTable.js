var HashTable = function(){
  this._limit = 8;

  // Use a limited array to store inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // ™s 'hi'
  //
  this._storage = makeLimitedArray(this._limit);
  this.temp = [];
  this.newLimit = 0;
};

HashTable.prototype.insert = function(key, value){
  var index = getIndexBelowMaxForKey(key, this._limit);
    //returns array of whats in the index
  if(this._storage.get(index)){
    var array = this._storage.get(index);
    array.push([key, value]);
    this._storage.set(index, array);
    console.log("i", index, "a" ,array);
  }
  else {
    //sets array at index if nothing exists
    var newArray = [];
    newArray.push([key, value]);
    this._storage.set(index, newArray);
    this.resize(2);
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
  if(!array){
    for(var i = 0; i < array.length; i++){
      if(array[i][0] === key){
        array.splice(i);
        this.resize(0.5);
        return true;
      }
    }
  }
  return false;

};

HashTable.prototype.slots = function() {
  var counter = 0;
  for (var i = 0; i < this._limit; i++) {
    if(this._storage.get(i)) {
      counter++;
    }
  }      //debugger;

  console.log(counter);
  return counter;
};

HashTable.prototype.resize = function(scale) {
  if(this.slots()/this._limit >= 0.75 || this.slots()/this._limit <= 0.25) {
    this.temp = this._storage;
    var index = '';

    this.newLimit = this._limit * scale;
    for (var i = 0; i < this._limit; i++) {
      if(this._storage.get(i)[0]) {
        for (var j = 0; j < this._storage.get(i)[j].length; j++) {
          index = getIndexBelowMaxForKey(this._storage.get(i)[j], this.newLimit);
          this.temp = this._storage.get(index);
          this.temp.push([index, this._storage.get(i)[j]]);
        }
      }
      else {
        index = getIndexBelowMaxForKey(this._storage.get(i), this.newLimit);
        this.temp = this._storage.get(index);
        this.temp.push([index, this._storage.get(i)[0]]);
      }
    this._storage = this.temp;
    }
  }
};
// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you