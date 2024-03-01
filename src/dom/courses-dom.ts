
import { ResponseModel } from "../models/ResponseModel.js";
import { listAllCourses } from "../services/courses.js";
function initApp() {
  listCourses();
}


async function listCourses() {
  const app = document.querySelector('#courseList') as HTMLDivElement;
  app.innerHTML = '';

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

    const courseElement = document.createElement('div');
    courseElement.setAttribute('course', 'course-card')
    document.body.appendChild(courseElement);
    // Check if the necessary properties are present in the course object
    if (!course.name || !course.imageUrl) {
      console.error('Invalid course object:', course);
      return;
    }
  
    courseElement.innerHTML = `
      <img src="../src/content/images/courses/${course.imageUrl}" alt="${course.name}">
      <h2>${course.name}</h2>
      <p>${course.type}</p>
      <p>${course.startDate}</p>
      <p>${course.duration}</p>
      <p>${course.description}</p>
   
      `;

    app.appendChild(courseElement);
  });
}



document.addEventListener('DOMContentLoaded', listCourses);
document.addEventListener('DOMContentLoaded', initApp);