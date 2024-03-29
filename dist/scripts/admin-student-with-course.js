import HttpClient from './http.js';

import { mergeCoursesWithStudents, createButton} from './dom.js';
import { createDiv } from '../dom/dom-modules.js';

let globalCourseId = 0;

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
    createDiv()
    const currentCourseId = card.getAttribute('courseId');
    console.log(currentCourseId);
    
    const editButton = createButton('edit button', selectedCourses);
    const deleteButton = createButton('delete course', () => {
      globalCourseId = currentCourseId;
      handleDeleteCourse();
    });
    card.appendChild(editButton);
    card.appendChild(deleteButton)
    
  });
};

const selectedCourses = (e) => {
  let courseId = 0;
  if (e.target.localName === 'div') {
    courseId = e.target.getAttribute('courseid');
  } else if (e.target.parentElement && e.target.parentElement.localName === 'div') {
    courseId = e.target.parentElement.getAttribute('courseid');
  }

  // Navigera till edit-course.html...
  location.href = `./edit-course.html?id=${courseId}`;
};



const handleDeleteCourse = async () => {
  try {
    const courseHttp = new HttpClient(`http://localhost:3000/courses/${globalCourseId}`);
    await courseHttp.delete();

    // Handle success, e.g., show a confirmation message
    alert(`Course with ID ${globalCourseId} deleted successfully.`);
  } catch (error) {
    console.error('Error deleting course:', error);
    // Handle error, e.g., show an error message
    alert(`An error occurred while deleting the course: ${error.message}`);
  }
};

document.addEventListener('DOMContentLoaded', initPage);
