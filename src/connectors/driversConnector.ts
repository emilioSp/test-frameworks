// Let's say these data are in a DB
import { setTimeout } from 'node:timers/promises';

const drivers: Driver[] = [{
  id: 1,
  name: 'Schumacher',
  contract: 'Ferrari',
},
{
  id: 2,
  name: 'Pepp',
  contract: 'Lamborghini',
},
{
  id: 3,
  name: 'Errant',
  contract: 'Audi',
},
];
export const getAllDrivers = async () => {
  await setTimeout(100);
  return drivers;
};
