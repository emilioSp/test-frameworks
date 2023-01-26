import { getAllCars } from './CarsRepository';

export const get = async (id: number): Promise<Car | undefined> => {
  const cars = await getAllCars();
  return cars.find((c) => c.id === id);
};

export const list = async (limit = 0): Promise<Car[]> => {
  const cars = await getAllCars();
  return cars.slice(0, limit);
};

export const find = async (name: string): Promise<Car | undefined> => {
  const cars = await getAllCars();
  return cars.find((c) => c.name.startsWith(name));
};
