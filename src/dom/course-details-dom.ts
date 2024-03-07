import { ResponseModel } from "../models/ResponseModel.js";
import { listAllCourses, listCourseDetailsbyId} from "../services/courses.js";
import { createDiv, createParagraph, createImage, addCourseImageClickHandler, createTitle} from "./dom-modules.js";
function initApp() {
  displayDetailsDisp();
}

const main = document.createElement('main');
main.setAttribute('main', '');
document.body.appendChild(main);


//create a course details div
const courseDetailsDiv = document.createElement('div')
courseDetailsDiv.setAttribute('id', 'course-details-display');
main.appendChild(courseDetailsDiv);

const courseId = location.search.split('=')[1];


//get the response from ResponseModel
async function displayDetailsDisp() {
  const app = document.querySelector('#course-details-display') as HTMLDivElement;

  console.log(app);
  
  let result: ResponseModel;

  const courseId = new URLSearchParams(window.location.search).get('id');
  console.log(courseId);

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

    if(courseId === course.id) {
    const courseElement = createDiv();
    courseElement.setAttribute('id', 'course-card');
    app.appendChild(courseElement);
    courseElement.appendChild(createImage(course.imageUrl, course.id));
    courseElement.appendChild(createTitle(`${course.name}`));
    courseElement.appendChild(createParagraph(`${course.type}`));
    courseElement.appendChild(createParagraph(`${course.description}`));
  } 
    // Check if the necessary properties are present in the course object
    else if (!course.name || !course.imageUrl) {
      console.error('Invalid course object:', course);
      return;
    } else {
      console.log('no courses match the request id');
      
    }
    console.log(course.id);
    console.log(course.imageUrl);
    console.log(location);
    
   

  });
}
   
  
  
//display specific course

  


//add footer 

// temp doms
// Display the list of courses in the DOM

  
document.addEventListener('DOMContentLoaded', displayDetailsDisp);

