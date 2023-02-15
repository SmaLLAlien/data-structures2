import { Injectable } from '@angular/core';

/**
 * {
 *   A: [B, C],
 *   B: [A],
 *   C: [A]
 * }
 */

@Injectable({
  providedIn: 'root'
})
export class GraphService {
  adjacencyList: {[key: string]: string[]} = {};

  addVertex(vertex: string): void {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1: string, v2: string): void  {
    this.adjacencyList[v1] && this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2] && this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1: string, v2: string): void  {
    this.adjacencyList[v1] = this.adjacencyList[v1] && this.adjacencyList[v1].filter(node => node !== v2 );
    this.adjacencyList[v2] = this.adjacencyList[v2] && this.adjacencyList[v2]?.filter(node => node !== v1 );
  }

  removeVertex(vertex: string): void {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}
