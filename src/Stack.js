import LinkedList from './DoublyLinkedList';

export default class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    return this.list.addToFront(new LinkedList.Node(value));
  }

  pop() {
    const { value } = this.list.head;
    this.list.removeFirst();
    return value;
  }
}
