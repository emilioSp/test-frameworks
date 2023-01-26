import { getAllDrivers } from '../connectors/driversConnector.js';

export const get = async (id: number): Promise<Driver | undefined> => {
  const drivers = await getAllDrivers();
  return drivers.find((d) => d.id === id);
};

export const list = async (limit = 0): Promise<Driver[]> => {
  const drivers = await getAllDrivers();
  return drivers.slice(0, limit);
};

export const find = async (name: string): Promise<Driver | undefined> => {
  const drivers = await getAllDrivers();
  return drivers.find((d) => d.name.startsWith(name));
};

export default { get, list, find };
