import * as Car from '../../src/Car';

describe('Car', () => {
  it('should return Ferrari', () => {
    const car = Car.get(1);
    expect(car?.name).toStrictEqual('Ferrari 296 GTB');
  });

  it('should return 2 cars', () => {
    const cars = Car.list(2);
    expect(cars.length).toStrictEqual(2);
  });

  it('should return Lambo', () => {
    const car = Car.find('Lamborghini');
    expect(car?.name).toStrictEqual('Lamborghini Huracan STO');
  });
});
