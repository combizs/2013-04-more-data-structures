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
     expect(tree.value).toEqual('a');
     tree.addChild('b');
     tree.addChild('c');
     expect(tree.children[1].value).toEqual('c');
  });

    it("should add nodes to second layer of tree", function() {
     tree.addChild('a');
     tree.addChild('b');
     tree.children[0].addChild('c');
     expect(tree.children[0].children[0].value).toEqual('c');
  });

  // Add more tests here to test the functionality of tree.
});