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

export const get = (id: number): Car | undefined => cars.find((c) => c.id === id);

export const list = (limit = 0): Car[] => cars.slice(0, limit);

export const find = (name: string): Car | undefined => cars.find((c) => c.name.startsWith(name));
