import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasicSortingService {

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

  selectionSort(arr: (string | number)[]): (string | number)[] {
    for (let i = 0; i < arr.length; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[minIndex] > arr[j]) {
          minIndex = j;
        }
      }

      if (i !== minIndex) {
        this.swap(arr, i, minIndex);
      }
    }

    return arr;
  }

  insertionSort(arr: (string | number)[]): (string | number)[] {
    for (let i = 1; i < arr.length; i++) {
      let j = i;
      while (arr[j] < arr[j - 1] && j >= 1 ) {
        this.swap(arr, j, j - 1);
        j--;
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
