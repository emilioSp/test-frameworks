import Car from '../models/Car.js';
import Driver from '../models/Driver.js';

type AssignedDriver = {
  carName: string;
  driverName: string;
}
export const assignDriver = async (driverName: string): Promise<AssignedDriver> => {
  const driver = await Driver.find(driverName);
  if (!driver) throw new Error('Driver not found');

  const cars = await Car.list();
  const car = cars.find((c) => c.name.includes(driver.contract));
  if (!car) throw new Error(`No car available for ${driver.name}`);

  return {
    carName: car.name,
    driverName: driver.name,
  };
};
