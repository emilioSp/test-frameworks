import { assignDriver } from '../../src/behaviours/assignDriver.js';

// TODO: mock with different values --> https://stackoverflow.com/questions/49650323/jest-mock-module-multiple-times-with-different-values
jest.mock(('../../src/connectors/driversConnector'), () => ({
  getAllDrivers: () => [{
    id: 50,
    name: 'Schumacher',
    contract: 'Ferrari',
  }],
}));

jest.mock(('../../src/connectors/carsConnector'), () => ({
  getAllCars: () => [{
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
}));

describe('Assign driver behaviours', () => {
  it('should assign a Ferrari to Schumacher', async () => {
    const assignedDriver = await assignDriver('Schumacher');
    expect(assignedDriver.carId).toStrictEqual(9999);
    expect(assignedDriver.carName).toStrictEqual('Ferrari 296 GTB');
    expect(assignedDriver.driverId).toStrictEqual(50);
    expect(assignedDriver.driverName).toStrictEqual('Schumacher');
  });

  // it('should throw an error', async () => {
  //   const mockedCars: Car.CarType[] = [
  //     {
  //       id: 2,
  //       name: 'Audi R8',
  //     },
  //     {
  //       id: 3,
  //       name: 'Lamborghini Huracan STO',
  //     }];
  //
  //   mockedAxios.get.mockResolvedValue({
  //     data: mockedCars,
  //   });
  //
  //   const assignedDriver = assignDriver('Schumacher');
  //   expect(assignedDriver).rejects.toThrow('No car available for Schumacher');
  // });
});
