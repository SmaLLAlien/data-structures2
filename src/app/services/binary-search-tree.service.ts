import { Injectable } from '@angular/core';
import {NodeService} from "./node.service";

@Injectable({
  providedIn: 'root'
})
export class BinarySearchTreeService {
  root: NodeService;

  insert(val: number): BinarySearchTreeService {
    const newNode = new NodeService(val);

    if (!this.root) {
      this.root = newNode
      return this;
    } else {
      let currentNode = this.root;

      while (true) {
        if (val < currentNode.val) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          } else {
            currentNode = currentNode.left;
          }
        } else if (val > currentNode.val) {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          } else {
            currentNode = currentNode.right;
          }
        } else {
          return undefined;
        }
      }
    }
  }

  find(val: number): NodeService {
    if (!this.root) {
      return null;
    } else {
      let current: NodeService = this.root;
      let found: NodeService = null;

      while (current && !found) {
        if (val < current.val) {
          current = current.left;
        } else if (val > current.val) {
          current = current.right
        } else {
          found = current;
        }
      }

      return found;
    }
  }
}
