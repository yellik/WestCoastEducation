import { fetchData } from '../utilities/http.js';
import { ResponseModel } from '../models/ResponseModel.js';

export async function listAllCourses(): 
Promise<ResponseModel> {
  const result = await fetchData('courses');
  return result as ResponseModel;
}