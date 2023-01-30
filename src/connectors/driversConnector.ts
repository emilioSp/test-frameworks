// Let's say these data are in a DB
import { setTimeout } from 'node:timers/promises';

export const getAllDrivers = async () => {
  await setTimeout(10); // Simulate a delay
  return [{
    id: 8888,
    name: 'Errant',
    contract: 'Audi',
  }];
};
