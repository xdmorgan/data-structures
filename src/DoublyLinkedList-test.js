import DoublyLinkedList from './DoublyLinkedList';

describe('new DoublyLinkedList', () => {
  it('should instantiate DoublyLinkedList with defaults', () => {
    const list = new DoublyLinkedList();
    expect(list.count).toBe(0);
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
    expect(Object.keys(list)).toEqual(['head', 'tail', 'count']);
  });
});

describe('new DoublyLinkedList.Node', () => {
  it('should instantiate Node subclass with defaults', () => {
    const node = new DoublyLinkedList.Node(1);
    expect(node.value).toBe(1);
    expect(node.next).toBe(null);
    expect(Object.keys(node)).toEqual(['value', 'next', 'previous']);
  });
});

describe('DoublyLinkedList.clear()', () => {
  it('should reset DoublyLinkedList to defaults', () => {
    const list = new DoublyLinkedList();
    expect(list.count).toBe(0);
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
    expect(Object.keys(list)).toEqual(['head', 'tail', 'count']);
  });
});

describe('DoublyLinkedList.addToFront()', () => {
  it('should add second item before first', () => {
    const list = new DoublyLinkedList();

    list.addToFront(new DoublyLinkedList.Node('first'));
    expect(list.toArray()).toEqual(['first']);

    list.addToFront(new DoublyLinkedList.Node('second'));
    expect(list.toArray()).toEqual(['second', 'first']);
  });
});

describe('DoublyLinkedList.addToEnd()', () => {
  it('should add second item after first', () => {
    const list = new DoublyLinkedList();

    list.addToEnd(new DoublyLinkedList.Node('first'));
    expect(list.toArray()).toEqual(['first']);

    list.addToEnd(new DoublyLinkedList.Node('second'));
    expect(list.toArray()).toEqual(['first', 'second']);
  });
});

describe('DoublyLinkedList.removeFirst()', () => {
  it('should take no action on empty list', () => {
    const list = new DoublyLinkedList();
    expect(list.toArray()).toEqual([]);
    list.removeFirst();
    expect(list.toArray()).toEqual([]);
  });

  it('should remove first entry in array', () => {
    const list = new DoublyLinkedList();
    list.addToEnd(new DoublyLinkedList.Node('first'));
    list.addToEnd(new DoublyLinkedList.Node('second'));
    expect(list.toArray()).toEqual(['first', 'second']);
    list.removeFirst();
    expect(list.toArray()).toEqual(['second']);
    list.removeFirst();
    expect(list.toArray()).toEqual([]);
  });
});

describe('DoublyLinkedList.removeLast()', () => {
  it('should take no action on empty list', () => {
    const list = new DoublyLinkedList();
    expect(list.toArray()).toEqual([]);
    list.removeLast();
    expect(list.toArray()).toEqual([]);
  });

  it('should remove last entry in array', () => {
    const list = new DoublyLinkedList();
    list.addToEnd(new DoublyLinkedList.Node('first'));
    list.addToEnd(new DoublyLinkedList.Node('second'));
    expect(list.toArray()).toEqual(['first', 'second']);
    list.removeLast();
    expect(list.toArray()).toEqual(['first']);
    list.removeLast();
    expect(list.toArray()).toEqual([]);
  });
});

describe('DoublyLinkedList.remove()', () => {
  it('should take no action on empty list', () => {
    const list = new DoublyLinkedList();
    expect(list.toArray()).toEqual([]);
    list.remove(new DoublyLinkedList.Node(1));
    expect(list.toArray()).toEqual([]);
  });

  it('should take no ation if Node is not found', () => {
    const list = new DoublyLinkedList();
    list.addToFront(new DoublyLinkedList.Node('first'));
    expect(list.toArray()).toEqual(['first']);
    list.remove(new DoublyLinkedList.Node('second'));
    expect(list.toArray()).toEqual(['first']);
  });

  it('remove object, if found', () => {
    const list = new DoublyLinkedList();
    const ref = new DoublyLinkedList.Node(2);
    list.addToEnd(new DoublyLinkedList.Node(1));
    list.addToEnd(ref);
    list.addToEnd(new DoublyLinkedList.Node(3));
    expect(list.toArray()).toEqual([1, 2, 3]);
    list.remove(ref);
    expect(list.toArray()).toEqual([1, 3]);
  });
});
