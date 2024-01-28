import { createCourseCard, addCourseImageClickHandler } from './dom.js';
import  HttpClient from './http.js';

const gallery = document.querySelector('#course-gallery');

async function initPage() {
  const courses = await loadCourses();

  courses.forEach((course) => {
    gallery.appendChild(createCourseCard(course));
  });


  // Hämta in alla bilder och knyt en klick händelse till varje bild...
  const images = document.querySelectorAll('.course-image img');
  addCourseImageClickHandler(images);
}

const loadCourses = async () => {
  const url = 'http://localhost:3000/courses';
  // Skapat en instans av vår nya HttpClient class(http.js)...
  const http = new HttpClient(url);
  // Kom ihåg att invänta http.get metoden med await...
  const courses = await http.get();
  return courses;
};


document.addEventListener('DOMContentLoaded', initPage);
