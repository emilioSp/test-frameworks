import {
  assert, describe, it, vi, afterEach, expect, Mock,
} from 'vitest';
import { assignDriver } from '../../src/behaviours/assignDriver.js';
import { getAllDrivers } from '../../src/connectors/driversConnector.js';
import { getAllCars } from '../../src/connectors/carsConnector.js';
import { DriverType } from '../../src/models/Driver.js';
import { CarType } from '../../src/models/Car.js';

// Modules to mock
vi.mock('../../src/connectors/driversConnector.ts');
vi.mock('../../src/connectors/carsConnector.ts');

// Modules mock implementation
const mockDrivers = (drivers: DriverType[]) => (getAllDrivers as Mock).mockResolvedValue(drivers);
const mockCars = (cars: CarType[]) => (getAllCars as Mock).mockResolvedValue(cars);

describe('Assign driver behaviour', () => {
  afterEach(() => {
    vi.restoreAllMocks();
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
    assert.strictEqual(assignedDriver.carId, 9999);
    assert.strictEqual(assignedDriver.carName, 'Ferrari 296 GTB');
    assert.strictEqual(assignedDriver.driverId, 50);
    assert.strictEqual(assignedDriver.driverName, 'Schumacher');
  });

  it('should throw an error', async () => {
    mockDrivers([{
      id: 50,
      name: 'Schumacher',
      contract: 'Ferrari',
    }]);

    mockCars([{
      id: 2,
      name: 'Audi R8',
    },
    {
      id: 3,
      name: 'Lamborghini Huracan STO',
    }]);

    await expect(assignDriver('Schumacher')).rejects.toThrow('No car available for Schumacher');
  });
});
