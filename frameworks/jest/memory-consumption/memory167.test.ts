import { jest } from '@jest/globals';
import { assignDriver } from '../../../src/behaviours/assignDriver.js';
import * as driversConnector from '../../../src/connectors/driversConnector.js';
import * as carsConnector from '../../../src/connectors/carsConnector.js';
import { DriverType } from '../../../src/models/Driver.js';
import { CarType } from '../../../src/models/Car.js';

const mockDrivers = (drivers: DriverType[]) => jest.spyOn(driversConnector, 'getAllDrivers').mockImplementation(async () => drivers);
const mockCars = (cars: CarType[]) => jest.spyOn(carsConnector, 'getAllCars').mockImplementation(async () => cars);

describe('memory consumption', () => {
  beforeEach(() => {
    mockDrivers([{
      id: 50,
      name: 'Schumacher',
      contract: 'Ferrari',
    }]);
  });

  it('dummy test', async () => {
    expect(1).toStrictEqual(1);
  });
});

describe('Assign driver behaviours', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should assign a Ferrari to Schumacher', async () => {
    mockDrivers([{
      id: 50,
      name: 'Schumacher',
      contract: 'Ferrari',
    }]);

    mockCars([{
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
    mockDrivers([{
      id: 50,
      name: 'Schumacher',
      contract: 'Ferrari',
    }]);

    mockCars([
      {
        id: 2,
        name: 'Audi R8',
      },
      {
        id: 3,
        name: 'Lamborghini Huracan STO',
      }]);

    expect(assignDriver('Schumacher')).rejects.toThrow('No car available for Schumacher');
  });
});
