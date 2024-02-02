import { createStudentCard, addStudentImageClickHandler } from './student-dom.js';
import  HttpClient from './http.js';

const studentList = document.querySelector('#student-list');

async function initPage() {
  const students = await loadStudents();

  students.forEach((student) => {
    studentList.appendChild(createStudentCard(student));
  });

  // Hämta in alla bilder och knyt en klick händelse till varje bild...
  const images = document.querySelectorAll('.student-image img');
  addStudentImageClickHandler(images);
}

const loadStudents = async () => {
  const url = 'http://localhost:3000/students';
  // Skapat en instans av vår nya HttpClient class(http.js)...
  const http = new HttpClient(url);
  // Kom ihåg att invänta http.get metoden med await...
  const students = await http.get();
  return students;
};

document.addEventListener('DOMContentLoaded', initPage);
