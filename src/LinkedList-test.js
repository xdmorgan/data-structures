import LinkedList from './LinkedList';

describe('new LinkedList', () => {
  it('should instantiate LinkedList with defaults', () => {
    const list = new LinkedList();
    expect(list.count).toBe(0);
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
    expect(Object.keys(list)).toEqual(['head', 'tail', 'count']);
  });
});

describe('new LinkedList.Node', () => {
  it('should instantiate Node subclass with defaults', () => {
    const node = new LinkedList.Node(1);
    expect(node.value).toBe(1);
    expect(node.next).toBe(null);
    expect(Object.keys(node)).toEqual(['value', 'next']);
  });
});

describe('LinkedList.clear()', () => {
  it('should reset LinkedList to defaults', () => {
    const list = new LinkedList();
    expect(list.count).toBe(0);
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
    expect(Object.keys(list)).toEqual(['head', 'tail', 'count']);
  });
});

describe('LinkedList.addToFront()', () => {
  it('should add second item before first', () => {
    const list = new LinkedList();

    list.addToFront(new LinkedList.Node('first'));
    expect(list.toArray()).toEqual(['first']);

    list.addToFront(new LinkedList.Node('second'));
    expect(list.toArray()).toEqual(['second', 'first']);
  });
});

describe('LinkedList.addToEnd()', () => {
  it('should add second item after first', () => {
    const list = new LinkedList();

    list.addToEnd(new LinkedList.Node('first'));
    expect(list.toArray()).toEqual(['first']);

    list.addToEnd(new LinkedList.Node('second'));
    expect(list.toArray()).toEqual(['first', 'second']);
  });
});

describe('LinkedList.removeFirst()', () => {
  it('should take no action on empty list', () => {
    const list = new LinkedList();
    expect(list.toArray()).toEqual([]);
    list.removeFirst();
    expect(list.toArray()).toEqual([]);
  });

  it('should remove first entry in array', () => {
    const list = new LinkedList();
    list.addToEnd(new LinkedList.Node('first'));
    list.addToEnd(new LinkedList.Node('second'));
    expect(list.toArray()).toEqual(['first', 'second']);
    list.removeFirst();
    expect(list.toArray()).toEqual(['second']);
    list.removeFirst();
    expect(list.toArray()).toEqual([]);
  });
});

describe('LinkedList.removeLast()', () => {
  it('should take no action on empty list', () => {
    const list = new LinkedList();
    expect(list.toArray()).toEqual([]);
    list.removeLast();
    expect(list.toArray()).toEqual([]);
  });

  it('should remove last entry in array', () => {
    const list = new LinkedList();
    list.addToEnd(new LinkedList.Node('first'));
    list.addToEnd(new LinkedList.Node('second'));
    expect(list.toArray()).toEqual(['first', 'second']);
    list.removeLast();
    expect(list.toArray()).toEqual(['first']);
    list.removeLast();
    expect(list.toArray()).toEqual([]);
  });
});

describe('LinkedList.remove()', () => {
  it('should take no action on empty list', () => {
    const list = new LinkedList();
    expect(list.toArray()).toEqual([]);
    list.remove(new LinkedList.Node(1));
    expect(list.toArray()).toEqual([]);
  });

  it('should take no ation if Node is not found', () => {
    const list = new LinkedList();
    list.addToFront(new LinkedList.Node('first'));
    expect(list.toArray()).toEqual(['first']);
    list.remove(new LinkedList.Node('second'));
    expect(list.toArray()).toEqual(['first']);
  });

  it('remove object, if found', () => {
    const list = new LinkedList();
    const ref = new LinkedList.Node(2);
    list.addToEnd(new LinkedList.Node(1));
    list.addToEnd(ref);
    list.addToEnd(new LinkedList.Node(3));
    expect(list.toArray()).toEqual([1, 2, 3]);
    list.remove(ref);
    expect(list.toArray()).toEqual([1, 3]);
  });
});
