export class Person {
  public constructor(
    private name: string,
    private age: number,
    private country: string
  ) {}

  public greeting(): string {
    return `Greeting ${this.name}`
  }
}
