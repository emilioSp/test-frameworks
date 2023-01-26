import { describe, it, expect } from 'vitest';
import * as Car from '../../src/Car';

describe('Car', () => {
  it('should return Ferrari', async () => {
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
