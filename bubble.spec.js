describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
    
    it('handles an array with 4 elements', function() {
        expect( bubbleSort([3,6,1,5])).toEqual([1,3,5,6])
    })

    it('handles an array with 4 elements', function() {
        expect( bubbleSort([3,6,1,5,6,9,0,4,5])).toEqual([0,1,3,4,5,5,6,6,9])
    })
  });