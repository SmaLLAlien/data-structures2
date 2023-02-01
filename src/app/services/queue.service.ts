import { Injectable } from '@angular/core';
import {NodeService} from "./node.service";

/**
 * queue on the list base. Add nodes to the end
 */
@Injectable({
  providedIn: 'root'
})
export class QueueService {
  first: NodeService;
  last: NodeService;
  size = 0;

  /**
   * add node to the end
   * @param val
   */
  enqueue(val: any): number {
    const newNode = new NodeService(val);

    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }

  dequeue(): any {
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
