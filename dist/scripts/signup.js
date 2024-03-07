import HttpClient from './http.js';
import { convertFormDataToJson } from './utilities.js';

const signupForm = document.querySelector('#signupForm');

signupForm.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent the default form submission

  try {
    console.log('Form submitted'); // Check if the function is being called

    const userData = new FormData(signupForm);
    const userObject = convertFormDataToJson(userData);
    console.log('User data:', userObject); // Check if the form data is being processed correctly

    const studentsUrl = 'http://localhost:3000/students';
    const http = new HttpClient(studentsUrl);

    // Add the new user (student) to the students array
    await http.add(userObject);

    alert('User registered successfully!');
    // Redirect to login page or any other desired page after successful signup
    location.href = '/src/pages/login.html';
  } catch (error) {
    console.error('An error occurred:', error.message);
    alert('Error registering user. Please try again.');
  }
});
