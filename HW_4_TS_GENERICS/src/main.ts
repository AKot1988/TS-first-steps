import './style.css'

const names = ['Alice', 'Bob', 'Eve']
const numbers = [1, 2, 3]
const mixed = ['Alice', 1, 'Bob', 2, 'Eve', 3]
const empty = []


enum MAnufacturers {
  BMW = 'BMW',
  MERCEDES = 'MERCEDES',
  AUDI = 'AUDI',
  TOYOTA = 'TOYOTA',
  VOLKSWAGEN = 'VOLKSWAGEN',
  TESLA = 'TESLA',
  FORD = 'FORD',
  CHEVROLET = 'CHEVROLET',
  HONDA = 'HONDA',
  NISSAN = 'NISSAN',
  JEEP = 'JEEP',
  LAND_ROVER = 'LAND_ROVER',
  PORSCHE = 'PORSCHE',
  LEXUS = 'LEXUS',
  SUBARU = 'SUBARU',
  MAZDA = 'MAZDA',
  CIRTOEN = 'CIRTOEN'
}

type carType = 'sedan' | 'hatchback' 

interface car {
  model: string
  year: number
  manufacturer: MAnufacturers
  type: carType
}

interface offroadCar extends car {
  offroad: boolean
  wheelsamount: number
}

const cars: car[] | offroadCar[] = [
  {
    model: 'X5',
    year: 2021,
    manufacturer: MAnufacturers.BMW,
    type: 'sedan'
  },
  {
    model: 'Cayenne',
    year: 2021,
    manufacturer: MAnufacturers.PORSCHE,
    type: 'hatchback'
  },
  {
    model: 'Civic',
    year: 2021,
    manufacturer: MAnufacturers.HONDA,
    type: 'sedan'
  },
  {
    model: 'Wrangler',
    year: 2021,
    manufacturer: MAnufacturers.JEEP,
    type: 'hatchback',
    offroad: true,
    wheelsamount: 4
  }
]