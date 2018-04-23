describe('Bubble Sort', function(){

  it('It should be on the prototype of the Array', function(){
    expect(typeof Array.prototype.bubbleSort).toBe("function");
  });

  it('handles an empty array', function(){
    expect([].bubbleSort()).toEqual( [] );
  });
  
  it('handles an array with 4 elements', function() {
      expect([3,6,1,5].bubbleSort()).toEqual([1,3,5,6])
  });



  it('handles an object with custom callback', function() {
    let arrToSort = [{ age: 4 }, { age: 8 }, { age: 2 }, { age: 9 }];
    let arrSorted = [{ age: 2 }, { age: 4 }, { age: 8 }, { age: 9 }];

    let mySort = function(a, b){
      if (a.age < b.age) return -1; // returning `-1` means "a goes before b"
      if (a.age > b.age) return 1;  // returning  `1` means "b goes before a"
      return 0; // returning 0 means "a and b are equivalent"
    }
    
    expect(arrToSort.bubbleSort(mySort)).toEqual(arrSorted)
  });
});
