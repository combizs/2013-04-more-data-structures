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
       binarySearchTree.insert(2);
       expect(binarySearchTree.contains(2)).toBe(true);

      });
    it("should check another value blahj", function(){
      binarySearchTree.insert(3);
       binarySearchTree.insert(2);
       binarySearchTree.insert(10);
       expect(binarySearchTree.contains(10)).toBe(true);
    });


    //**************DEPTH FIRST LOG TESTS*********************\
    it("should alert the number for every node", function(){
      binarySearchTree.insert(3);
      binarySearchTree.insert(2);
      binarySearchTree.insert(21);
      binarySearchTree.insert(1);
      binarySearchTree.insert(5);
      binarySearchTree.insert(10);
      binarySearchTree.depthFirstLog(function(){
      //alert(this.value);
      });
    });

    it("breadth nodes", function(){
      binarySearchTree.insert(3);
      binarySearchTree.insert(2);
      binarySearchTree.insert(21);
      binarySearchTree.insert(1);
      binarySearchTree.insert(5);
      binarySearchTree.insert(10);
      binarySearchTree.breadthFirstLog(function(){
        console.log(this.value);
      });
    });
});