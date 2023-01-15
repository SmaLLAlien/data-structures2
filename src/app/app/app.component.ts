import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {SearchService} from "./search.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'data_structures';
  taskControl = new FormControl('', Validators.required);
  array: (number| string)[] = [];

  constructor(private searchService: SearchService) { }

  addItemToList(): void {

  }

  deleteItem(i: number): void {

  }

  ngOnInit(): void {
    const length = 10;
    this.array = this.searchService.generateArray(length);
    const index = this.searchService.binarySearch([3, 44, 75, 44, 91, 46, 57, 50, 35, 92].sort(), 50);
    console.log(this.array, 50, index);

    const c = this.searchService.naiveString('lorlollolied loled', 'loled');
    console.log(c, 'c');
  }
}
