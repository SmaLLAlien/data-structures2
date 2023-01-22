import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {BasicSortingService} from "./services/basic-sorting.service";
import {RadixSortService} from "./services/radix-sort.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'data_structures';
  taskControl = new FormControl('', Validators.required);
  array: (number| string)[] = [];

  constructor(private sortService: BasicSortingService,
              private radixSort: RadixSortService) { }

  addItemToList(): void {

  }

  deleteItem(i: number): void {

  }

  ngOnInit(): void {
    this.array = this.sortService.generateArray(20);
    const result = this.radixSort.radixSort(this.array as number[]);

    console.log(result);
  }
}
