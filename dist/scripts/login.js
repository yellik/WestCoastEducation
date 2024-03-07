import HttpClient from './http.js';
import { convertFormDataToJson } from './utilities.js';

const loginForm = document.querySelector('#loginForm');

window.submitForm = async (event) => {
  try {
    event.preventDefault(); // Prevent the default form submission behavior
    
    const userDetails = new FormData(loginForm);
    const userData = convertFormDataToJson(userDetails);

    console.log('User Data:', userData);

    const studentsUrl = 'http://localhost:3000/students';
    const http = new HttpClient(studentsUrl);
    const students = await http.get();

    console.log('Students Data:', students);

    const user = students.find((student) => {
      if (student.username && student.password) {
        return (
          student.username === userData.email &&
          student.password === userData.password
        );
      } else if (student.email && student.password) {
        return (
          student.email === userData.email &&
          student.password === userData.password
        );
      }

      return false;
    });

    if (user) {
      alert('Your login details are correct but we have not built your profile yet. Hold tight.');
      location.href = '/src/pages/admin/student-list.html'
    } else {
      alert('Invalid username or password. Please try again.');
    }
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
};

loginForm.addEventListener('submit', window.submitForm);
