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

  depthFirstRecursiveTraversal(startVertex: string): string[] {
    const result: string[] = [];
    const visited: {[key: string]: boolean} = {};

    this.dfs(startVertex, visited, result);

    return result;
  }

  depthFirstIterative(startNode: string) {
    const stack: string[] = [startNode];
    const result: string[] = [];
    const visited: {[key: string]: boolean} = {};
    let currVertex: string;

    visited[startNode] = true;
    while (stack.length) {
      currVertex = stack.pop();
      result.push(currVertex);

      this.adjacencyList[currVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return result;
  }

  breadthFirstTraversal(startNode: string): string[] {
    const queue: string[] = [startNode];
    const result: string[] = [];
    const visited: {[key: string]: boolean} = {[startNode]: true};
    let currVertex: string;

    while (queue.length) {
      currVertex = queue.shift();
      result.push(currVertex);

      this.adjacencyList[currVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }

  private dfs(vertex: string, visited: {[key: string]: boolean}, result: string[]) {
    if (!vertex) {
      return null;
    }
    visited[vertex] = true;
    result.push(vertex);

    this.adjacencyList[vertex].forEach(neighbor => {
      if (!visited[neighbor]) {
        this.dfs(neighbor, visited, result);
      }
    })
  }
}
