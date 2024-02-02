import { BaseType } from '../models/BaseType';
import { ResponseModel } from '../models/ResponseModel.js';

export async function fetchData(
  endpoint: string,
): Promise<ResponseModel | BaseType[]> {
  const BASE_URL = 'http://localhost:3000';

  const url = `${BASE_URL}/${endpoint}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log(responseData[5]);
    

    if (!Array.isArray(responseData)) {
      console.error('Invalid response format. Expected an array.');
      throw new Error('Invalid response format');
    }

    return responseData;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error to propagate it up
  }
}
