export class PriorityQueueService {
  values: {val: any, priority: number}[] = [];

  enqueue(val, priority: number): void {
    this.values.push({val, priority});
    this.sort();
  }

  dequeue(): {val: any, priority: number} {
    return this.values.shift();
  }

  sort(): void {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}
