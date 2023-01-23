import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import * as Car from '../../src/Car';

describe('Car', () => {
  it('should return Ferrari', () => {
    const car = Car.get(1);
    assert.equal(car?.name, 'Ferrari 296 GTB');
  });

  it('should return 2 cars', () => {
    const cars = Car.list(2);
    assert.equal(cars.length, 2);
  });

  it('should return Lambo', () => {
    const car = Car.find('Lamborghini');
    assert.equal(car?.name, 'Lamborghini Huracan STO');
  });
});
