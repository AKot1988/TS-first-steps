// export const firstObject: string = 'smth'
import { Dogs } from '../main.ts';

export default class BigDogs implements Dogs {
  type: string;
  averageWeight: number;
  averageAge: number;
  hairLength: string;

  constructor(
    type: string,
    averageWeight: number,
    averageAge: number,
    hairLength: string
  ) {
    this.type = type;
    this.averageWeight = averageWeight;
    this.averageAge = averageAge;
    this.hairLength = hairLength;
  }
}

console.log(new BigDogs('big', 10, 10, 'long'));
