import esmock from 'esmock';
import { describe, it } from 'node:test';
import assert from 'node:assert';
import { DriverType } from '../../src/models/Driver.js';
import { CarType } from '../../src/models/Car.js';

const getMockedModule = async (drivers: DriverType[], cars: CarType[]) => esmock(
  '../../src/behaviours/assignDriver.ts',
  {},
  {
    '../../src/connectors/driversConnector.ts': {
      getAllDrivers: () => drivers,
    },
    '../../src/connectors/carsConnector.ts': {
      getAllCars: () => cars,
    },
  },
);

describe('Assign driver behaviour', () => {
  it('should assign a Ferrari to Schumacher', async () => {
    const fn = await getMockedModule(
      [{
        id: 50,
        name: 'Schumacher',
        contract: 'Ferrari',
      }],
      [{
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
      }],
    );

    const assignedDriver = await fn.assignDriver('Schumacher');
    assert.strictEqual(assignedDriver.carId, 9999);
    assert.strictEqual(assignedDriver.carName, 'Ferrari 296 GTB');
    assert.strictEqual(assignedDriver.driverId, 50);
    assert.strictEqual(assignedDriver.driverName, 'Schumacher');
  });

  it('should throw an error', async () => {
    const fn = await getMockedModule(
      [{
        id: 50,
        name: 'Schumacher',
        contract: 'Ferrari',
      }],
      [
        {
          id: 2,
          name: 'Audi R8',
        },
        {
          id: 3,
          name: 'Lamborghini Huracan STO',
        }],
    );

    await assert.rejects(
      fn.assignDriver('Schumacher'),
      (err: Error) => {
        assert.strictEqual(err.message, 'No car available for Schumacher');
        return true;
      },
    );
  });
});
