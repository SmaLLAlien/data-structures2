import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {SortingService} from "./sorting.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'data_structures';
  taskControl = new FormControl('', Validators.required);
  array: (number| string)[] = [];

  constructor(private sortService: SortingService) { }

  addItemToList(): void {

  }

  deleteItem(i: number): void {

  }

  ngOnInit(): void {
    this.array = this.sortService.generateArray(20);
    const result = this.sortService.insertionSort(this.array);

    console.log(result);
  }
}
