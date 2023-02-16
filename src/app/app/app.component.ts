import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {GraphService} from "../services/graph.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'data_structures';
  taskControl = new FormControl('', Validators.required);
  array: (number| string)[] = [];

  constructor(private graph: GraphService) { }

  addItemToList(): void {

  }

  deleteItem(i: number): void {

  }

  ngOnInit(): void {
    this.graph.addVertex('A');
    this.graph.addVertex('B');
    this.graph.addVertex('C');
    this.graph.addVertex('D');
    this.graph.addVertex('E');
    this.graph.addVertex('F');

    this.graph.addEdge('A', 'B');
    this.graph.addEdge('A', 'C');
    this.graph.addEdge('B', 'D');
    this.graph.addEdge('C', 'E');
    this.graph.addEdge('D', 'F');
    this.graph.addEdge('E', 'F');

    const nodes = this.graph.depthFirstRecursiveTraversal('A');
    const nodes2 = this.graph.depthFirstIterative('A');
    const nodes3 = this.graph.breadthFirstTraversal('A');
    console.log(nodes);
    console.log(nodes2);
    console.log(nodes3);
  }
}
