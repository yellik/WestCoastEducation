
import { ResponseModel } from "../models/ResponseModel.js";
import { listAllCourses } from "../services/courses.js";
import { createDiv, createParagraph, createImage, addCourseImageClickHandler, createTitle} from "./dom-modules.js";



async function listCourses() {
  const app = document.querySelector('#courseList') as HTMLDivElement;
  //app.innerHTML = '';
  console.log(app);
  
  let result: ResponseModel;

  try {
    result = await listAllCourses();
  } catch (error) {
    console.error('Error fetching courses:', error);
    return;
  }

  console.log('Fetched Courses:', result);

  if (!Array.isArray(result)) {
    console.error('Invalid response format. Expected a "results" array.');
    return;
  }

  //result.forEach((course) => {
    //console.log('Rendering Course:', course);

    
    // Check if the necessary properties are present in the course object
    //if (!course.name || !course.imageUrl) {
    //  console.error('Invalid course object:', course);
    //  return;
    }
    
   
  //});
  
 
  
 
//}

document.addEventListener('DOMContentLoaded', listCourses);
