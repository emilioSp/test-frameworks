// Let's say these data are provided by an external service
import axios from 'axios';
import { CarType } from '../models/Car.js';

export const getAllCars = async () => {
  const response = await axios.get('http://localhost/cars-service');
  const cars: CarType[] = response.data;
  return cars;
};
