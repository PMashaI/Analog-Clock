export class TimeDate {
  constructor(readonly date: Date) {}

  get seconds(): number {
    return this.date.getSeconds();
  }

  get minutes(): number {
    return this.date.getMinutes();
  }

  get hours(): number {
    return this.date.getHours();
  }
}
