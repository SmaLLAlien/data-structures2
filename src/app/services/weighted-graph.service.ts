import { Injectable } from '@angular/core';
import {PriorityQueueService} from "./priority-queue.service";

/**
 * {
 *   A: [{node: B, weight: 9}, {node: C, weight: 3}],
 *   B: [{node: A, weight: 19}],
 *   C: [{node: A, weight: 5}]
 * }
 */

@Injectable({
  providedIn: 'root'
})
export class WeightedGraphService {
  adjacencyList: {[key: string]: { node: string, weight: number }[]} = {};

  addVertex(vertex: string): void {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1: string, v2: string, weight: number): void  {
    this.adjacencyList[v1] && this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2] && this.adjacencyList[v2].push({ node: v1, weight });
  }

  dijkstra(start: string, finish: string) {
    const nodes = new PriorityQueueService();
    const distances: {[key: string]: number} = {};
    const previous = {};
    let smallest: string;
    let path = [];

    // build initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }

      previous[vertex] = null;
    }

    // as long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;

      if (smallest === finish) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          // find neighbor node
          let nextNode = this.adjacencyList[smallest][neighbor];
          // calculate new distance to neighbor node;
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;

          if (candidate < distances[nextNeighbor]) {
            // updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            // updating previous - how we got to neighbor
            previous[nextNeighbor] = smallest;
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }

    return path.concat(smallest).reverse();
  }
}
