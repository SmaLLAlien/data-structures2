import { Injectable } from '@angular/core';
import {NodeService} from "./node.service";

@Injectable({
  providedIn: 'root'
})
export class DoubleLinkedListService {
  head: NodeService = null;
  tail: NodeService = null;
  length = 0;

  constructor() { }

  push(val: any): DoubleLinkedListService {
    let newNode = new NodeService(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  pop(): NodeService {
    if (!this.head) {
      return undefined;
    }

    let poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }

    this.length--;

    return poppedNode;
  }

  shift(): NodeService {
    if (this.length === 0) {
      return undefined;
    }

    const oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }


    this.length--;

    return oldHead
  }

  unshift(val: any): DoubleLinkedListService {
    const newNode = new NodeService(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  get(index: number): NodeService {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    if (index <= this.length / 2) {
      let count = 0;
      let current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }

      return current;
    } else {
      let count = this.length - 1;
      let current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }

      return current;
    }
  }

  set(index: number, val: any): boolean {
    const node = this.get(index);

    if (node) {
      node.val = val;

      return true;
    }

    return false;
  }

  insert(index: number, val: any): boolean {
    if (index < 0 || index > this.length) {
      return undefined;
    }

    if (index === 0) {
      return !!this.unshift(val);
    }

    if (index === this.length) {
      return !!this.push(val);
    }

    const newNode = new NodeService(val);
    const beforeNewNode = this.get(index - 1);
    const afterNewNode = beforeNewNode.next;

    beforeNewNode.next = newNode;
    newNode.prev = beforeNewNode;

    newNode.next = afterNewNode;
    afterNewNode.prev = newNode;

    this.length++;

    return true;
  }

  remove(index: number): NodeService {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    if (index === 0) {
      return this.shift();
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    let removedNode = this.get(index);
    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;

    removedNode.next = null;
    removedNode.prev = null;

    this.length--;

    return removedNode;
  }
}
