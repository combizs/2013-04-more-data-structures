describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
     expect(tree.addChild).toEqual(jasmine.any(Function));
     expect(tree.contains).toEqual(jasmine.any(Function));
     expect('value' in tree).toBe(true);
  });

    it("should add value to tree", function() {
     tree.addChild('a');
     expect(tree.children[0].value).toEqual('a');
     tree.addChild('b');
     expect(tree.children[1].value).toEqual('b');
  });

    it("should add nodes to second layer of tree", function() {
     tree.addChild('a');
     tree.addChild('b');
     tree.children[0].addChild('c');
     expect(tree.children[0].children[0].value).toEqual('c');
  });

  //****************************CONTAINS TESTS**************************
   it("should return true if passed in value is contained in tree", function() {
     tree.addChild('a');
     expect(tree.contains('a')).toBe(true);
  });

    it("should return true if passed in value is contained in tree", function() {
     tree.addChild('a');
     tree.addChild('b');
     tree.children[0].addChild('c');
     expect(tree.contains('c')).toBe(true);
  });

    it("should return true if passed in value is contained in different branch", function() {
     tree.addChild('a');
     tree.addChild('b');
     tree.children[0].addChild('c');
     expect(tree.contains('b')).toBe(true);
  });
});