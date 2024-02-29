import { fetchData } from "../utilities/http";
import { ResponseModel } from "../models/ResponseModel";

export async function listAllStudents():
Promise<ResponseModel>{
    const result = await fetchData('students')
    return result as ResponseModel;
}