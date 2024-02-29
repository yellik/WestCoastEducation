
import { ResponseModel } from "../models/ResponseModel.js";
import { listAllStudents } from "../services/studentList.js";
function initApp() {
  listStudents();
}


async function listStudents() {
  const app = document.querySelector('#student-list') as HTMLDivElement;
  app.innerHTML = '';

  let result: ResponseModel;

  try {
    result = await listAllStudents();
  } catch (error) {
    console.error('Error fetching courses:', error);
    return;
  }

  console.log('Fetched Students:', result);

  if (!Array.isArray(result)) {
    console.error('Invalid response format. Expected a "results" array.');
    return;
  }

  result.forEach((student) => {
    console.log('Rendering student:', student);

    const studentElement = document.createElement('div');
    studentElement.setAttribute('student', 'student-card')
    document.body.appendChild(studentElement);
    // Check if the necessary properties are present in the student object
    if (!student.name || !student.imageUrl) {
      console.error('Invalid course object:', student);
      return;
    }
  
    studentElement.innerHTML = `
      <h2>${student.name}</h2>
      <p>${student.username}</p>
      <p>${student.course}</p>
      <p>${student.invoiceAdress}</p>
      <p>${student.mobileNumber}</p>
   
      <img src="../src/content/images/courses/${student.imageUrl}" alt="${student.name}">`;

    app.appendChild(studentElement);
  });
}



document.addEventListener('DOMContentLoaded', listStudents);
document.addEventListener('DOMContentLoaded', initApp);