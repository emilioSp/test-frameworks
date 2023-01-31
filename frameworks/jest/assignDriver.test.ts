import { jest } from '@jest/globals';
import { assignDriver } from '../../src/behaviours/assignDriver.js';
import * as driversConnector from '../../src/connectors/driversConnector.js';
import * as carsConnector from '../../src/connectors/carsConnector.js';
import { DriverType } from '../../src/models/Driver.js';
import { CarType } from '../../src/models/Car.js';

const mockModules = (drivers: DriverType[], cars: CarType[]) => {
  jest.spyOn(driversConnector, 'getAllDrivers').mockImplementation(async () => drivers);
  jest.spyOn(carsConnector, 'getAllCars').mockImplementation(async () => cars);
};

describe('Assign driver behaviours', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it('should assign a Ferrari to Schumacher', async () => {
    mockModules([{
      id: 50,
      name: 'Schumacher',
      contract: 'Ferrari',
    }], [{
      id: 9999,
      name: 'Ferrari 296 GTB',
    },
    {
      id: 2,
      name: 'Audi R8',
    },
    {
      id: 3,
      name: 'Lamborghini Huracan STO',
    }]);

    const assignedDriver = await assignDriver('Schumacher');
    expect(assignedDriver.carId).toStrictEqual(9999);
    expect(assignedDriver.carName).toStrictEqual('Ferrari 296 GTB');
    expect(assignedDriver.driverId).toStrictEqual(50);
    expect(assignedDriver.driverName).toStrictEqual('Schumacher');
  });

  it('should throw an error', async () => {
    mockModules([{
      id: 50,
      name: 'Schumacher',
      contract: 'Ferrari',
    }], [
      {
        id: 2,
        name: 'Audi R8',
      },
      {
        id: 3,
        name: 'Lamborghini Huracan STO',
      }]);

    const assignedDriver = assignDriver('Schumacher');
    expect(assignedDriver).rejects.toThrow('No car available for Schumacher');
  });
});
