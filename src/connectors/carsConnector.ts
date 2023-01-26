// Let's say these data are provided by an external service

import axios from 'axios';

export const getAllCars = async () => {
  const response = await axios.get('http://localhost/cars-service');
  const cars: Car[] = response.data;
  return cars;
};
