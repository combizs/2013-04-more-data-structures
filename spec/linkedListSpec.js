describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });


  //**************TAIL TESTS********************
  it("should have a head and tail", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });
  it("should return null since its empty", function() {
    expect(linkedList.tail).toEqual(null);
  });
  it("next value of tail node should be null", function() {
    linkedList.addToTail('a');
    expect(linkedList.tail.next).toEqual(null);
  });
  it("should return new value of tailnode added to list", function() {
    linkedList.addToTail('a');
    expect(linkedList.tail.value).toEqual('a');
    linkedList.addToTail('a');
    linkedList.addToTail('c');
    linkedList.addToTail('d');
    expect(linkedList.tail.value).toEqual('d');
  });

  it("should set previous reference of new tail to old tail", function() {
    linkedList.addToTail('a');
    linkedList.addToTail('b');
    linkedList.addToTail('c');
    expect(linkedList.tail.previous.value).toEqual('b');
  });

    //*****************REMOVE FROM HEAD TESTS******************
  // add more tests here to test the functionality of linkedList


    it("should return new value of headnode after removing head element from the list", function() {
    linkedList.addToTail('a');
    linkedList.addToTail('b');
    linkedList.addToTail('c');
    linkedList.addToTail('d');
    linkedList.removeHead();
    expect(linkedList.head.value).toEqual('b');
    expect(linkedList.head.next.value).toEqual('c');
    expect(linkedList.head.next.next.value).toEqual('d');
  });


//*************CONTAINS TEST*****************************************

    it("should return true if value passed in exists in list", function() {
    linkedList.addToTail('a');
    expect(linkedList.contains('a')).toEqual(true);
    expect(linkedList.contains('b')).toEqual(false);
    // expect(linkedList.head.next.value).toEqual('c');
    // expect(linkedList.head.next.next.value).toEqual('d');
  });

  //**************TEST ADD TO HEAD*************************
 it("should correctly add element as head of list", function() {
    linkedList.addToHead('a');
    linkedList.addToHead('b');
    expect(linkedList.head.next.value).toEqual('a');
  });

  it("should correctly add element as head of list and correctly set to tail if it was first element added", function() {
    linkedList.addToHead('a');
    expect(linkedList.tail.value).toEqual('a');
  });

  it("should correctly add element as head of list", function() {
    linkedList.addToHead('a');
    linkedList.addToHead('b');
    expect(linkedList.head.value).toEqual('b');
  });

  it("should correctly create previous refernece of old head to refer to new head", function() {
    linkedList.addToHead('a');
    linkedList.addToHead('b');
    linkedList.addToHead('c');
    expect(linkedList.head.next.previous.value).toEqual('c');
  });

it("should correctly keep track of previous references for all nodes in list", function() {
    linkedList.addToHead('a');
    linkedList.addToHead('b');
    linkedList.addToHead('c');
    expect(linkedList.head.next.next.previous.value).toEqual('b');
  });

//*****REMOVE TAIL*************



    it("should return new value of headnode after removing head element from the list", function() {
    linkedList.addToTail('a');
    linkedList.addToTail('b');
    linkedList.removeTail();
    expect(linkedList.tail.value).toEqual('a');
    expect(linkedList.tail.next).toEqual(null);

  });













});