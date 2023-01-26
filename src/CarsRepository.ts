import axios from 'axios';

export const getAllCars = async () => {
  const response = await axios.get('http://localhost/cars');
  const cars: Car[] = response.data;
  return cars;
};
