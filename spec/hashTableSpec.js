describe("hashTable", function() {
  var hashTable;

  beforeEach(function() {
    hashTable = new HashTable();
  });

  // it("should have methods named 'insert' and 'retrieve", function() {
  //   expect(hashTable.insert).toEqual(jasmine.any(Function));
  //   expect(hashTable.retrieve).toEqual(jasmine.any(Function));
  // });

  // // add more tests here to test the functionality of hashTable
  //  it("should have methods named 'insert' and 'retrieve", function() {
  //   expect(hashTable.insert).toEqual(jasmine.any(Function));
  //   expect(hashTable.retrieve).toEqual(jasmine.any(Function));
  // });

  //  it("should insert key value pair into storage", function(){
  //   hashTable.insert("dog", "friendly");
  //    hashTable.insert("cat", "snarky");
  //    hashTable.insert("monkey", "tricky");
  //    expect(hashTable.retrieve("cat")).toEqual("snarky");
  //  });


  //  //*******RETRIEVE*******************
  //  it("should retrieve value from given key from storage", function(){
  //   hashTable.insert("dog", "friendly");
  //   hashTable.retrieve("dog");
  //   expect(hashTable.retrieve("dog")).toEqual("friendly");
  //  });

  //  it("should retrieve value from given key from storage", function(){
  //   hashTable.insert("dog", "friendly");
  //   hashTable.retrieve("dog");
  //   hashTable.insert("cat", "snarky");
  //   hashTable.insert("fish", "boring");
  //   hashTable.retrieve("dog");
  //   expect(hashTable.retrieve("dog")).toEqual("friendly");
  //  });

  //  it("should remove specific tuple from array held at correct index of hash table if exists", function(){
  //   hashTable.insert("dog", "friendly");
  //   hashTable.insert("cat", "snarky");
  //   hashTable.insert("fish", "boring");
  //   hashTable.remove("dog");
  //   expect(hashTable.retrieve("dog")).toEqual(undefined);
  //  });

  //  it("should return false if element wanting to be removed does not exist", function(){
  //   hashTable.remove("dog");
  //   expect(hashTable.retrieve("dog")).toBe(false);
  //  });


  //  it("should return true if element sucessfully removed", function(){
  //   hashTable.insert("dog", "friendly");
  //   expect(hashTable.remove("dog")).toBe(true);
  //  });

  // it("should return number of slots used", function() {
  //   hashTable.insert("dog", "friendly");
  //   hashTable.insert("cat", "asdasd");
  //   expect(hashTable.slots()).toEqual(3);
  // });
});