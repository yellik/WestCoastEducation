import HttpClient from './http.js';
import { convertFormDataToJson } from './utilities.js';

const form = document.querySelector('#addStudentForm');

const addStudent = async (e) => {
  e.preventDefault();

  const student = new FormData(form);
  const obj = convertFormDataToJson(student);
  saveStudent(obj);
};

const saveStudent = async (student) => {
  const url = 'http://localhost:3000/students';
  const http = new HttpClient(url);
  await http.add(student);
  location.href = './add-student.html';
};

form.addEventListener('submit', addStudent);
