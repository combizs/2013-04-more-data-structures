var MakeSet = function(){
  var set = Object.create(MakeSet.prototype); // fix me
  set.storage = {};
  return set;
};

MakeSet.prototype.add = function(value){
  this.storage[value] = true;
};

MakeSet.prototype.contains = function(value){
  // if (!this.storage[value]) { return false;}
  return !!this.storage[value];
};

MakeSet.prototype.remove = function(value){
  if(this.storage[value]) {
    delete this.storage[value];
  }
};