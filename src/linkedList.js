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


  newLinkedList.addToHead = function(value){


    var oldHead = this.head;
    this.head = makeNode(value);
    if(oldHead!==null){
      this.head.next = oldHead;
    }

    if(this.tail === null){
      this.tail = this.head;
    }
   
  };

  newLinkedList.addToTail = function(value){
    var oldTail = this.tail;
    this.tail = makeNode(value);
     if(oldTail !== null) {
      oldTail.next = this.tail;
    }


    if(this.head === null) {
    this.head = this.tail;
    }
    else if(this.head.next === null){
      this.head.next = this.tail;
    }
  };

  newLinkedList.removeHead = function(){
    var temp = this.head.next;
    delete this.head;
    this.head = temp;
  };

  newLinkedList.contains = function(value){
    var node = this.head;
    while(node!==null){
      if(node.value === value){
        return true;
      }
      node = node.next;
    }
    return false;
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
