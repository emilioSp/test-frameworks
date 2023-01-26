import Car from '../models/Car.js';
import Driver from '../models/Driver.js';

type AssignedDriver = {
  carId: number;
  carName: string;
  driverId: number;
  driverName: string;

}
export const assignDriver = async (driverName: string): Promise<AssignedDriver> => {
  const driver = await Driver.find(driverName);
  if (!driver) throw new Error('Driver not found');

  const cars = await Car.list();
  const car = cars.find((c) => c.name.includes(driver.contract));
  if (!car) throw new Error(`No car available for ${driver.name}`);

  return {
    carId: car.id,
    carName: car.name,
    driverId: driver.id,
    driverName: driver.name,
  };
};
