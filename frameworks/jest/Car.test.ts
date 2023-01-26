import axios from 'axios';
import * as Car from '../../src/Car';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

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

describe('Car', () => {
  it('should return Ferrari', async () => {
    mockedAxios.get.mockResolvedValue({
      data: mockedCars,
    });

    const car = await Car.get(1);
    expect(car?.name).toStrictEqual('Ferrari 296 GTB');
  });

  it('should return 2 cars', async () => {
    const cars = await Car.list(2);
    expect(cars.length).toStrictEqual(2);
  });

  it('should return Lambo', async () => {
    const car = await Car.find('Lamborghini');
    expect(car?.name).toStrictEqual('Lamborghini Huracan STO');
  });
});
