import { getAllDrivers } from '../connectors/driversConnector.js';

export type DriverType = {
  id: number,
  name: string,
  contract: string;
};

export const get = async (id: number): Promise<DriverType | undefined> => {
  const drivers = await getAllDrivers();
  return drivers.find((d) => d.id === id);
};

export const list = async (limit = 0): Promise<DriverType[]> => {
  const drivers = await getAllDrivers();
  return drivers.slice(0, limit);
};

export const find = async (name: string): Promise<DriverType | undefined> => {
  const drivers = await getAllDrivers();
  return drivers.find((d) => d.name.startsWith(name));
};

export default { get, list, find };
