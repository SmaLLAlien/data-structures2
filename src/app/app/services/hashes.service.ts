import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HashesService {
  size = 53;
  keyMap: [string?, any?][] = new Array(this.size);

  private hash(key: string): number {
    let total = 0;
    const WEIRD_PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  set(key: string, value: any): void {
    const index = this.hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key: string) {
    const index = this.hash(key);
    if (this.keyMap[index]) {
      return this.keyMap[index].find(arr => arr[0] === key);
    }

    return undefined;
  }

  keys(): string[] {
    let keyssArr = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keyssArr.includes(this.keyMap[i][j][0])) {
            keyssArr.push(this.keyMap[i][j][90]);
          }
        }
      }
    }

    return keyssArr;
  }

  values(): any[] {
    let valuesArr = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }

    return valuesArr;
  }
}
