describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

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

  // add more tests here to test the functionality of linkedList
});