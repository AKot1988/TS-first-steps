// -------------------------------------------- A liitle bit practice about interfaces object in TS---------------------------------------

//create Types for object
type Cats = {
  type: string;
  averageWeight: number;
  averageAge: number;
  hairLength: string;
};

type ExtendedCats = Cats & {
  averageEyeColor: string;
  averageTailLength?: number;
};

const bysia: Cats = {
  type: 'bysia',
  averageWeight: 4,
  averageAge: 15,
  hairLength: 'middle',
};

const barsik: ExtendedCats = {
  type: 'barsik',
  averageWeight: 4,
  averageAge: 15,
  hairLength: 'middle',
  averageEyeColor: 'green',
};

console.log(bysia);
console.log(barsik);

//Create interfaces for object
interface Dogs {
  type: string;
  averageWeight: number;
  averageAge: number;
  hairLength: string;
}

interface ExtendedDogs extends Dogs {
  averageEyeColor: string;
  averageTailLength?: number;
}

class BigDogs implements Dogs {
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

const Fill: Dogs = {
  type: 'Fill',
  averageWeight: 4,
  averageAge: 15,
  hairLength: 'middle',
};

const Rex: ExtendedDogs = {
  type: 'Rex',
  averageWeight: 4,
  averageAge: 15,
  hairLength: 'middle',
  averageEyeColor: 'green',
};

const Tyzik: BigDogs = new BigDogs('Tyzik', 4, 15, 'middle');
console.log(Tyzik);

console.log(Fill);
console.log(Rex);
