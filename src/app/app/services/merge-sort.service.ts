import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MergeSortService {

  constructor() { }

  private merge(arr1: (string | number)[], arr2: (string | number)[]): (string | number)[] {
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
      if(arr2[j] > arr1[i]){
        results.push(arr1[i]);
        i++;
      } else {
        results.push(arr2[j])
        j++;
      }
    }
    while(i < arr1.length) {
      results.push(arr1[i])
      i++;
    }
    while(j < arr2.length) {
      results.push(arr2[j])
      j++;
    }
    return results;
  }

  mergeSort(arr: (string | number)[]): (string | number)[] {
    if (arr.length <= 1) {
      return arr;
    }

    let middle = Math.floor(arr.length / 2);
    let left = this.mergeSort(arr.slice(0 , middle));
    let right = this.mergeSort(arr.slice(middle));

    return this.merge(left, right);
  }
}
