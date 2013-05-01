describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = new BinarySearchTree(6);
  });

  it("should have methods named 'insert', 'contains', and 'depthFirstLog", function() {
    expect(binarySearchTree.insert).toEqual(jasmine.any(Function));
    expect(binarySearchTree.contains).toEqual(jasmine.any(Function));
    expect(binarySearchTree.depthFirstLog).toEqual(jasmine.any(Function));
  });

    //*****INSERT TESTS***********

    it("should create initial root node if no nodes exist", function(){
      binarySearchTree.insert(3);
    });


    //****CONTAINS TESTS***********
    it("should return true if tree contains specified value", function(){
       binarySearchTree.insert(3);
       expect(binarySearchTree.contains(3)).toBe(true);
    });

});