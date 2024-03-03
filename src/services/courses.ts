import { fetchData } from '../utilities/http.js';
import { ResponseModel } from '../models/ResponseModel.js';

export async function listAllCourses(): 
Promise<ResponseModel> {
  const result = await fetchData('courses');
  return result as ResponseModel;
}
export async function listCourseDetailsbyId(courseId: string): 
Promise<ResponseModel> {
  const result = await fetchData(`courses/${courseId}`);
  return result as ResponseModel;
}
