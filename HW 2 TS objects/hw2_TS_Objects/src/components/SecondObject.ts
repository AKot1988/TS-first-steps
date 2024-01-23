export default class SecondObject {
  private string1: string;
  private string2: string;

  constructor(string1: string, string2: string) {
    this.string1 = string1;
    this.string2 = string2;
  }

  concatenateStrings(): string {
    return this.string1 + this.string2;
  }
}