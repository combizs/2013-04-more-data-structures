describe("set", function() {
  var set;

  beforeEach(function() {
    set = MakeSet();
  });

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set.add).toEqual(jasmine.any(Function));
    expect(set.contains).toEqual(jasmine.any(Function));
    expect(set.remove).toEqual(jasmine.any(Function));
  });

  it("should return true for adding the string 'abc'", function() {
    set.add('abc');
    expect(set.storage['abc']).toEqual(true);
  });

  it("check storage for certain string and return true", function() {
    set.add('123');
    set.add('honey boo boo child');
    expect(set.contains('123')).toEqual(true);
    expect(set.contains('456')).toEqual(false);
  });

  it("should remove item", function() {
    set.add('honey boo boo');
    set.remove('honey boo boo');
    expect(set.contains('honey boo boo')).toEqual(false);
  });


});