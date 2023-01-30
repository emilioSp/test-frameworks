import { getAllCars } from '../connectors/carsConnector.js';

export type CarType = {
  id: number,
  name: string,
};
export const get = async (id: number): Promise<CarType | undefined> => {
  const cars = await getAllCars();
  return cars.find((c) => c.id === id);
};

export const list = async (limit = 100): Promise<CarType[]> => {
  const cars = await getAllCars();
  return cars.slice(0, limit);
};

export const find = async (name: string): Promise<CarType | undefined> => {
  const cars = await getAllCars();
  return cars.find((c) => c.name.startsWith(name));
};

export default { get, list, find };
