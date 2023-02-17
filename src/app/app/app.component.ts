import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {WeightedGraphService} from "../services/weighted-graph.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'data_structures';
  taskControl = new FormControl('', Validators.required);
  array: (number| string)[] = [];

  constructor(private graph: WeightedGraphService) { }

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

    this.graph.addEdge('A', 'B', 4);
    this.graph.addEdge('A', 'C', 2);
    this.graph.addEdge('B', 'E', 3);
    this.graph.addEdge('C', 'D', 2);
    this.graph.addEdge('C', 'F', 4);
    this.graph.addEdge('D', 'E', 3);
    this.graph.addEdge('D', 'F', 1);
    this.graph.addEdge('E', 'F', 1);

    const path = this.graph.dijkstra('A', 'F');
    console.log(path);
  }
}
