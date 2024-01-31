import HttpClient from './http.js';
import { createCourseCard } from './dom.js';

const courseDetails = document.querySelector('#course-details')

  
function initPage() {
  const courseId = location.search.split('=')[1];
  displayCourseDetails(courseId)
 
  // Hämta in alla bilder och knyt en klick händelse till varje bild...

}

async function displayCourseDetails (id) {
  const url = 'http://localhost:3000/courses/' + id;
  const http = new HttpClient(url);
  const course = await http.get();
  //checking that the course item is printed to the console
  console.log(course);
  //passing the course card through the DOM
  courseDetails.appendChild(createCourseCard(course));
  };

  
document.addEventListener('DOMContentLoaded', initPage);