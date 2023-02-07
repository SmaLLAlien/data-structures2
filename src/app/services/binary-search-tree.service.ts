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

  breadsFirstSearch(): NodeService[] {
    let data: NodeService[] = [];
    let node: NodeService = this.root;
    let queue = [node];

    while (queue.length) {
      node = queue.shift();
      data.push(node);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    return data;
  }

  depthFirstSearchPreOrder(): NodeService[] {
    let data: NodeService[] = [];
    let current = this.root;

    this.traversePreOrder(current, data);
    return data;
  }

  private traversePreOrder(node: NodeService, data: NodeService[]) {
    data.push(node);

    if (node.left) {
      this.traversePreOrder(node.left, data);
    }

    if (node.right) {
      this.traversePreOrder(node.right, data);
    }
  }

  depthFirstSearchPostOrder(): NodeService[] {
    let data: NodeService[] = [];

    this.traversePostOrder(this.root, data);
    return data;
  }

  private traversePostOrder(node: NodeService, data: NodeService[]) {
    if (node.left) {
      this.traversePostOrder(node.left, data);
    }

    if (node.right) {
      this.traversePostOrder(node.right, data);
    }

    data.push(node);
  }

  depthFirstSearchInOrder(): NodeService[] {
    let data: NodeService[] = [];

    this.traverseInOrder(this.root, data);
    return data;
  }

  private traverseInOrder(node: NodeService, data: NodeService[]) {
    if (node.left) {
      this.traverseInOrder(node.left, data);
    }

    data.push(node);

    if (node.right) {
      this.traverseInOrder(node.right, data);
    }
  }
}
