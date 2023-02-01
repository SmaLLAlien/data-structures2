import { Injectable } from '@angular/core';
import {NodeService} from "./node.service";

/**
 * stack using list base. push to the first position, remove from the first position
 */
@Injectable({
  providedIn: 'root'
})
export class StackService {
  first: NodeService = null;
  last: NodeService = null;
  size = 0;

  push(val: any): number {
    const newNode = new NodeService(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }

    return ++this.size;
  }

  pop() {
    if (!this.first) {
      return null;
    }

    const temp = this.first;

    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size--;

    return temp.value;
  }
}
