import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuickSortService {

  constructor() {}

  pivot(arr: (string | number)[], start = 0, end = arr.length + 1) {
    let pivot  = arr[start];
    let swapIndx = start;

    for (let i = start; i < arr.length; i++) {

      if (pivot > arr[i]) {
        swapIndx++;
        this.swap(arr, swapIndx, i);
      }

    }

    this.swap(arr, start, swapIndx);

    return swapIndx;
  }

  private swap(arr: (string | number)[], index1: number, index2: number): void {
    [arr[index2], arr[index1]] = [arr[index1], arr[index2]];
  }

  quickSort(arr: (string | number)[], left = 0, right = arr.length - 1) {
    if (left < right) {
      let pivotIndex = this.pivot(arr, left, right);
      this.quickSort(arr, left, pivotIndex - 1);
      this.quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
  }
}
