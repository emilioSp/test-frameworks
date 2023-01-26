import { setTimeout } from 'timers/promises';

type Car = {
  id: number,
  name: string
}

const cars: Car[] = [{
  id: 1,
  name: 'Ferrari 296 GTB',
},
{
  id: 2,
  name: 'Audi R8',
},
{
  id: 3,
  name: 'Lamborghini Huracan STO',
}];

export const get = async (id: number): Promise<Car | undefined> => {
  await setTimeout(100);
  return cars.find((c) => c.id === id);
};

export const list = async (limit = 0): Promise<Car[]> => {
  await setTimeout(100);
  return cars.slice(0, limit);
};

export const find = async (name: string): Promise<Car | undefined> => {
  await setTimeout(100);
  return cars.find((c) => c.name.startsWith(name));
};
