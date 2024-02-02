import HttpClient from './http.js';
import { convertFormDataToJson } from './utilities.js';

const form = document.querySelector('#addCourseForm');

const addCourse = async (e) => {
  e.preventDefault();
if (validateForm()) {
  const course = new FormData(form);
  const obj = convertFormDataToJson(course);
  saveCourse(obj);
  } else {
    alert('Please fill in all fields');
  }
 };

 const validateForm = () => {
  const requiredFields = form.querySelectorAll('[required]');
  for (const field of requiredFields) {
    if (!field.value.trim()) {
      return false;
    }
  }
  return true;
};
const saveCourse = async (course) => {
  const url = 'http://localhost:3000/courses';
  const http = new HttpClient(url);
  await http.add(course);
  location.href = './add-course.html';
};

form.addEventListener('submit', addCourse);
