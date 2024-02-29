var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { listAllStudents } from "../services/studentList.js";
function initApp() {
    listStudents();
}
function listStudents() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = document.querySelector('#student-list');
        app.innerHTML = '';
        let result;
        try {
            result = yield listAllStudents();
        }
        catch (error) {
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
            studentElement.setAttribute('student', 'student-card');
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
    });
}
document.addEventListener('DOMContentLoaded', listStudents);
document.addEventListener('DOMContentLoaded', initApp);
