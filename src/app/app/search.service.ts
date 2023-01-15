import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {



  linearSearch(arr: string | number[], val: any): number {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === val) {
        return i;
      }
    }

    return -1;
  }

  binarySearchRecursive(arr: (number| string)[], val: any): any {
    const middleIndex = Math.floor(arr.length / 2);
    if (arr[middleIndex] === val) {
      return middleIndex;
    }

    if (arr.length <= 1) {
      return -1;
    }

    if (arr[middleIndex] > val) {
      return  this.binarySearchRecursive(arr.slice(0, middleIndex - 1), val);
    } else {
      return this.binarySearchRecursive(arr.slice(middleIndex + 1, arr.length), val);
    }
  }

  binarySearch(arr: (number| string)[], val: string | number): number {
    let middleIndex = Math.floor(arr.length / 2);
    let start = 0;
    let end = arr.length - 1;

    while (arr[middleIndex] !== val && start <= end) {
      if (val < arr[middleIndex]) {
        end = middleIndex - 1;
      } else {
        start = middleIndex + 1;
      }

      middleIndex = Math.floor((start + end) / 2);
    }

    if (arr[middleIndex] === val) {
      return  middleIndex;
    } else {
      return -1;
    }
  }

  generateArray(length: number): string[] | number[] {
    const arr = [];
    for (let i = 0; i < length; i++) {
      const item = Math.floor(Math.random() * 100);
      arr.push(item);
    }

    return arr;
  }

  naiveString(str: string, substr: string): number {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      let subCount = 0;
      for (let j = 0; j < substr.length; j++) {
        if (str[i + j] === substr[j]) {
          subCount++
        } else {
          break;
        }
      }
      if (subCount === substr.length) {
        count++;
      }
    }

    return count;
  }
}
