import {Node} from "./Node";

class SingleLinkedList {
  length = 0;
  head: Node;
  tail: Node;
  constructor() {}

  /**
   * add to node
   * if no nodes, crate head and tail, set head to new node
   * otherwise add new node to the tail, set tail to the new node
   * @param val
   */
  push(val: any): SingleLinkedList {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  traverse(): void {
    let current = this.head;

    while (current) {
      console.log(current);
      current = current.next;
    }
  }

  /**
   * remove from the end
   * if no nodes return undefined
   * otherwise traverse till node before end, set it as tail
   */
  pop(): Node {
    if (!this.head) {
      return undefined;
    }

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  /**
   * removed from begin
   * if no nodes return undefined
   * otherwise move head to next node
   */
  shift(): Node {
    if (!this.head) {
      return undefined;
    }

    const currHead = this.head;
    this.head = currHead.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return currHead;
  }

  /**
   * add to the start
   * if no nodes, crate head and tail, set head to new node
   * otherwise point new node to the head, set head to new node
   */
  unshift(val: any) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;

    return this;
  }

  /**
   * return node by position in chain
   * @param index: number
   */
  get(index: number): Node {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let counter = 0;
    let current = this.head;

    while (counter !== index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  set(index: number, val: any): Node {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return foundNode;
    }

    return null;
  }

  /**
   * insert node in some position
   * @param index
   * @param val
   */
  insert(index: number, val: any): boolean {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === this.length) {
      return !!this.push(val);
    }

    if (index === 0) {
      return !!this.unshift(val);
    }
    const newNode = new Node(val);
    const previous = this.get(index - 1);
    const temp = previous.next;

    previous.next = newNode;
    newNode.next = temp;
    this.length++;

    return true;
  }

  remove(index: number): Node {
    if (index < 0 || index > this.length) {
      return undefined;
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    if (index === 0) {
      return this.shift();
    }

    const previous = this.get(index - 1);
    const removed: Node = previous.next;

    previous.next = removed.next;
    this.length--;

    return removed;
  }

  reverse(): void {
    let node: Node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev: Node = null;
    let next: Node;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }

  print(): void {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current);
      current = current.next;
    }
    console.log(arr);
  }
}
