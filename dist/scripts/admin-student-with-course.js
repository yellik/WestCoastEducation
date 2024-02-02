import HttpClient from './http.js';
import { mergeCoursesWithStudents } from './dom.js';

const initPage = async () => {
  
  const courseUrl = 'http://localhost:3000/courses';
  const studentUrl = 'http://localhost:3000/students';

  // Create instances of HttpClient for both courses and students
  const courseHttp = new HttpClient(courseUrl);
  const studentHttp = new HttpClient(studentUrl);

  // Fetching courses and students...
  const courses = await courseHttp.get();
  const students = await studentHttp.get();

 
mergeCoursesWithStudents(courses, students, document.querySelector('#student-with-course'));

    const cards = document.querySelectorAll('#student-with-course div');
    cards.forEach((card) => {
      card.addEventListener('click', selectedCourses);
    });
  };
const selectedCourses = (e) => {
  let courseId = 0;
  if (e.target.localName === 'div') {
    courseId = e.target.getAttribute('courseid');
  } else if (e.target.localName === 'div') {
    courseId = e.target.parentElement.getAttribute('courseid');
  }

  // Navigera till edit-course.html...
  location.href = `./edit-course.html?id=${courseId}`;
};

// Händelselyssnare EventListeners...
document.addEventListener('DOMContentLoaded', initPage)
