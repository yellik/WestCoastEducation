import HttpClient from './http.js';
import { convertFormDataToJson } from './utilities.js';

const loginForm = document.querySelector('#loginForm');

window.submitForm = async () => {
  try {
    
    const userDetails = new FormData(loginForm);
    const userData = convertFormDataToJson(userDetails);   
    const studentsUrl = 'http://localhost:3000/students';
    const http = new HttpClient(studentsUrl);
    const students = await http.get();
    const user = students.find((student) => {
      if (student.username && student.password) {
        return (
          student.username === userData.email &&
          student.password === userData.password
        );
      } else if (student.email && student.password) {
        // For students with 'email' and 'password' fields
        return (
          student.email === userData.email &&
          student.password === userData.password
        );
      }

      return false;
    });

      if (user) {
      // Redirect to the user profile page (modify the URL as needed)
      alert('Your login details are correct but we have not built your profile yet. Hold tight.');

    } else {
      alert('Invalid username or password. Please try again.');
    }
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
};
