import { ResponseModel } from "../models/ResponseModel";
import { fetchData } from "../utilities/http.js";

const form = document.querySelector('#updateCourseForm') as HTMLFormElement;
const deleteButton = document.querySelector('#delete') as HTMLButtonElement;
import { listCourseDetailsbyId } from "../services/courses";

let result: ResponseModel;

const courseId = new URLSearchParams(window.location.search).get('id');
console.log(courseId);

const getCourse = async (id: string) => {
  try {
    result: li
    
  } catch (error) {
    
  }

};

const loadDataToForm = (course: string) => {
  // skapa en dictionary lista med alla egenskaper ifrån
  // objektet course... ['key', 'value']
  const entries = new URLSearchParams(course).entries();
  for (let [key, value] of entries) {
    if (key !== 'id') {
      const input = form.elements[key: any] as HTMLInputElement;
      input.value = value;
    }
  }
};

const updateCourse = async (e: Event) => {
  e.preventDefault();

  const course = new FormData(form);
  const obj = convertFormDataToJson(course);

  const url = `http://localhost:3000/courses/${courseId}`;
  const http = new HttpClient(url);
  await http.update(obj);

  location.href = './index.html';
  console.log(obj);
};

function convertFormDataToJson(formData: FormData) {
  const json: { [key: string]: string } = {};
  formData.forEach((value, key) => {
    json[key] = value.toString();
  });
  return json;
}

// Assuming HttpClient class is properly defined in your code

// Attach event listeners
if (form && deleteButton) {
  form.addEventListener('submit', updateCourse);
  deleteButton.addEventListener('click', handleDeleteCourse);
}

async function handleDeleteCourse() {
  try {
    const url = `http://localhost:3000/courses/${courseId}`;
    const http = new HttpClient(url);
    await http.delete();

    // Handle success, e.g., show a confirmation message
    alert(`Course with ID ${courseId} deleted successfully.`);
    location.href = './index.html';
  } catch (error) {
    console.error('Error deleting course:', error);
    // Handle error, e.g., show an error message
    alert(`An error occurred while deleting the course: ${error.message}`);
  }
}
