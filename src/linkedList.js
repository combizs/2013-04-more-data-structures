// Note: don't use an array to do this.
// var linkedList;

// linkedList = makeLinkedList();

// it("should have a head and tail", function() {
//   expect(Object.keys(linkedList)).toContain("head");
//   expect(Object.keys(linkedList)).toContain("tail");
// });


var makeLinkedList = function(){
  var newLinkedList = {};
  newLinkedList.head = null;
  newLinkedList.tail = null;

  newLinkedList.addToTail = function(value){
    this.tail = makeNode(value);
  };

  newLinkedList.removeHead = function(){
  };

  newLinkedList.contains = function(){
  };

  return newLinkedList;
};

var makeNode = function(value){
  var newNode = {};
  newNode.value = value;
  newNode.next = null;

  newNode.removeNextNode = function(){
  };

  return newNode;
};
