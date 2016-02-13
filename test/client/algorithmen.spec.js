import algorithmen from '../../src/algorithmen.js';

describe('algorithmen', () => {

  function verifySorted(array){
    for(var i = 0; i < array.length - 1; i++){
      assert(array[i] <= array[i + 1], 'array is not sorted');
    }
  }

  it('should be runing without any problems', () => {
    expect(algorithmen).to.not.throw();
  });

  it('should sort by integer', function() {
    verifySorted([1, 3, 4, 6]);
  });
});
