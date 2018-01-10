// https://app.pluralsight.com/player?course=ads-part1&author=robert-horvick&name=ads-linked-list&clip=5&mode=live
//

export default class LinkedList {
  static Node = class Node {
    constructor(val) {
      this.value = val;
      this.next = null;
    }
  };

  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  addToFront(node) {
    const prevHead = this.head;
    this.head = node;
    this.head.next = prevHead;
    if (this.count === 0) this.tail = this.head;
    this.count++;
  }

  addToEnd(node) {
    if (this.count === 0) return this.addToFront(node);
    else {
      this.tail.next = node;
      this.tail = node;
      this.count++;
    }
  }

  removeFirst() {
    if (this.count === 0) return;
    this.head = this.head.next;
    this.count--;
    if (this.count === 0) this.tail = null;
  }

  removeLast() {
    if (this.count === 0) return;
    if (this.count === 1) this.head = this.tail = null;
    else {
      let node = this.head;
      while (node.next !== this.tail) node = node.next;
      node.next = null;
      this.tail = node;
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

  *iterable() {
    let current = this.head;
    while (current) {
      yield current;
      current = current.next;
    }
  }

  contains(node) {
    const enumerator = this.iterable();
    while (true) {
      const next = enumerator.next();
      if (next.value === node) return true;
      if (next.done) return false;
    }
  }

  toArray() {
    const enumerator = this.iterable();
    const arr = [];
    while (true) {
      const next = enumerator.next();
      if (next.done) break;
      arr.push(next.value.value);
    }
    return arr;
  }

  print() {
    const enumerator = this.iterable();
    while (true) {
      const next = enumerator.next();
      if (next.done) break;
      console.log(next.value);
    }
  }
}
