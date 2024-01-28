import HttpClient from './http.js';
import { createCourseList } from './dom.js';

const initPage = async () => {
  const url = 'http://localhost:3000/courses';
  // Skapa ett objekt av typen HttpClient
  const http = new HttpClient(url);

  // Getting all courses...
  const courses = await http.get();
 
  createCourseList(courses, document.querySelector('#courses'));
  // get all the div elements
  const cards = document.querySelectorAll('#courses div');

  // Gå igenom all div element och lägg till en klick händelse
  cards.forEach((card) => {
    card.addEventListener('click', selectedCourses);
  });
};

const selectedCourses = (e) => {
  let courseId = 0;
  if (e.target.localName === 'div') {
    courseId = e.target.getAttribute('courseid');
  } else if (e.target.localName === 'span') {
    courseId = e.target.parentElement.getAttribute('courseid');
  }

  // Navigera till edit-course.html...
  location.href = `./edit-course.html?id=${courseId}`;
};

// Händelselyssnare EventListeners...
document.addEventListener('DOMContentLoaded', initPage);
