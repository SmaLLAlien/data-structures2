import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RadixSortService {

  constructor() { }

  radixSort(numsArr: number []) {
    let maxDigitsCount = this.mostDigits(numsArr);
    for (let k = 0; k < maxDigitsCount; k++) {
      let digitBuckets: number[][] = Array.from({length: 10}, () => []);
      for (let i = 0; i < numsArr.length; i++) {
        let digit = this.getDigit(numsArr[i], k);
        digitBuckets[digit].push(numsArr[i]);
      }
      // @ts-ignore
      numsArr = [].concat(...digitBuckets);
    }

    return numsArr;
  }

  private getDigit(num: number, i: number): number {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  }

  private digitCount(num: number) {
    if (num === 0) {
      return 1;
    }
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }

  private mostDigits(nums: number[]): number {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, this.digitCount(nums[i]));
    }

    return maxDigits;
  }
}
