import Stack from './Stack';

describe('new Stack()', () => {
  it('should instantiate without issue', () => {
    const stack = new Stack();
    expect(Object.keys(stack)).toEqual(['list']);
    expect(stack.list.toArray()).toEqual([]);
  });
});
