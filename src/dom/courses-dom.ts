
import { ResponseModel } from "../models/ResponseModel.js";
import { listAllCourses } from "../services/courses.js";
import { createDiv, createParagraph, createImage, addCourseImageClickHandler, createTitle} from "./dom-modules.js";
function initApp() {
  listCourses();
}


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

  result.forEach((course) => {
    console.log('Rendering Course:', course);

    const courseElement = createDiv();
    courseElement.setAttribute('course', 'course-card')
    app.appendChild(courseElement);
    // Check if the necessary properties are present in the course object
    if (!course.name || !course.imageUrl) {
      console.error('Invalid course object:', course);
      return;
    }
    
   
    courseElement.appendChild(createImage(course.imageUrl, course.id))
    courseElement.appendChild(createTitle(`${course.name}`));
    courseElement.appendChild(createParagraph(`${course.type}`));
    courseElement.appendChild(createParagraph(`${course.description}`));
    courseElement.appendChild(createParagraph(`We start on: ${course.startDate}`));
    courseElement.appendChild(createParagraph(`you will be done in: ${course.duration}`));
    courseElement.appendChild(createParagraph(`Only EUR ${course.price}`));
    

    //make clickable images with link to details 
    const images = courseElement.querySelectorAll('img');
    addCourseImageClickHandler(Array.from(images));
  });
  
 
  
 
}

document.addEventListener('DOMContentLoaded', listCourses);
document.addEventListener('DOMContentLoaded', initApp);