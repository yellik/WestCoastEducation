import HttpClient from './http.js';
import { convertFormDataToJson } from './utilities.js';

const form = document.querySelector('#updateCourseForm');
const deleteButton = document.querySelector('#delete');

const initPage = () => {
  document.addEventListener('DOMContentLoaded', async () => {
    const courseId = new URLSearchParams(window.location.search).get('id');
    console.log(courseId);
    await getCourse(courseId);
  });
};

const getCourse = async (id) => {
  const url = `http://localhost:3000/courses/${id}`;
  const http = new HttpClient(url);
  const course = await http.get();
  loadDataToForm(course);
};

const loadDataToForm = (course) => {
  const entries = new URLSearchParams(course).entries();
  for (let [key, value] of entries) {
    if (key !== 'id') {
      const input = form.elements[key];
      input.value = value;
    }
  }
};

const updateCourse = async (e) => {
  e.preventDefault();

  const courseId = new URLSearchParams(window.location.search).get('id');
  const course = new FormData(form);
  const obj = convertFormDataToJson(course);

  const url = `http://localhost:3000/courses/${courseId}`;
  const http = new HttpClient(url);
  await http.update(obj);

  location.href = './index.html';
};

export const removeCourse = async () => {
  const courseId = new URLSearchParams(window.location.search).get('id');
  const url = `http://localhost:3000/courses/${courseId}`;
  const http = new HttpClient(url);
  await http.delete();
  location.href = './index.html';
};

document.addEventListener('DOMContentLoaded', initPage);
form.addEventListener('submit', updateCourse);
deleteButton.addEventListener('click', removeCourse);
