import LinkedList from './LinkedList';

export default class DoublyLinkedList extends LinkedList {
  static Node = class Node extends LinkedList.Node {
    constructor(val) {
      super(val);
      this.previous = null;
    }
  };

  addToFront(node) {
    const prevHead = this.head;
    this.head = node;
    this.head.next = prevHead;
    if (this.count === 0) this.tail = this.head;
    else prevHead.previous = node;
    this.count++;
  }

  addToEnd(node) {
    if (this.count === 0) return this.addToFront(node);
    else {
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
      this.count++;
    }
  }

  removeFirst() {
    if (this.count === 0) return;
    this.head = this.head.next;
    this.count--;
    if (this.count === 0) this.tail = undefined;
    else this.head.previous = undefined;
  }

  removeLast() {
    if (this.count === 0) return;
    if (this.count === 1) this.head = this.tail = undefined;
    else {
      this.tail.previous.next = undefined;
      this.tail = this.tail.previous;
    }
    this.count--;
  }

  remove(node) {
    let previous,
      current = this.head;
    while (current) {
      if (current === node) {
        // case 3b
        if (previous) {
          previous.next = current.next;
          if (!current.next) this.tail = previous;
          else current.next.previous = previous;
          this.count--;
        } else {
          // case 2 or 3a
          this.removeFirst();
        }
        return true;
      }
      previous = current;
      current = current.next;
    }
    return false;
  }
}
