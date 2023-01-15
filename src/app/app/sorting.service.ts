import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortingService {

  constructor() { }

  bubbleSort(arr: (string | number)[]): (string | number)[] {
    const length = arr.length;
    for (let i = 0; i < length - 1; i++) {
      let swapCount = 0;
      for (let j = 0; j < length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          swapCount++;
          this.swap(arr, j, j + 1);
        }
      }

      if (!swapCount) {
        break;
      }
    }

    return arr;
  }

  generateArray(length: number): string[] | number[] {
    const arr = [];
    for (let i = 0; i < length; i++) {
      const item = Math.floor(Math.random() * 100);
      arr.push(item);
    }

    return arr;
  }

  private swap(arr: (string | number)[], index1: number, index2: number): void {
    [arr[index2], arr[index1]] = [arr[index1], arr[index2]];
  }
}
