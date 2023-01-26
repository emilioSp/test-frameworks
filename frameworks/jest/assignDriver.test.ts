import axios from 'axios';
import * as Car from '../../src/models/Car.js';
import { assignDriver } from '../../src/behaviour/assignDriver.js';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

jest.mock(('../../src/connectors/driversConnector'), () => ({
  getAllDrivers: () => [{
    id: 50,
    name: 'Schumacher',
    contract: 'Ferrari',
  }],
}));

describe('Assign driver behaviour', () => {
  it('should assign a Ferrari to Schumacher', async () => {
    const mockedCars: Car[] = [{
      id: 1,
      name: 'Ferrari 296 GTB',
    },
    {
      id: 2,
      name: 'Audi R8',
    },
    {
      id: 3,
      name: 'Lamborghini Huracan STO',
    }];

    mockedAxios.get.mockResolvedValue({
      data: mockedCars,
    });

    const assignedDriver = await assignDriver('Schumacher');
    expect(assignedDriver.carName).toStrictEqual('Ferrari 296 GTB');
    expect(assignedDriver.driverName).toStrictEqual('Schumacher');
  });

  it('should throw an error', async () => {
    const mockedCars: Car[] = [
      {
        id: 2,
        name: 'Audi R8',
      },
      {
        id: 3,
        name: 'Lamborghini Huracan STO',
      }];

    mockedAxios.get.mockResolvedValue({
      data: mockedCars,
    });

    const assignedDriver = assignDriver('Schumacher');
    expect(assignedDriver).rejects.toThrow('No car available for Schumacher');
  });
});
