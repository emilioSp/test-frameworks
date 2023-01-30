// Let's say these data are in a DB
import { setTimeout } from 'node:timers/promises';
import { DriverType } from '../models/Driver.js';

const drivers: DriverType[] = [{
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
  await setTimeout(10); // Simulate a delay
  return drivers;
};
