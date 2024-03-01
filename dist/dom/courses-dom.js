var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { listAllCourses } from "../services/courses.js";
function initApp() {
    listCourses();
}
function listCourses() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = document.querySelector('#courseList');
        app.innerHTML = '';
        let result;
        try {
            result = yield listAllCourses();
        }
        catch (error) {
            console.error('Error fetching courses:', error);
            return;
        }
        console.log('Fetched Courses:', result);
        if (!Array.isArray(result)) {
            console.error('Invalid response format. Expected a "results" array.');
            return;
        }
        result.forEach((course) => {
            console.log('Rendering Course:', course);
            const courseElement = document.createElement('div');
            courseElement.setAttribute('course', 'course-card');
            document.body.appendChild(courseElement);
            // Check if the necessary properties are present in the course object
            if (!course.name || !course.imageUrl) {
                console.error('Invalid course object:', course);
                return;
            }
            courseElement.innerHTML = `
      <img src="../src/content/images/courses/${course.imageUrl}" alt="${course.name}">
      <h2>${course.name}</h2>
      <p>${course.type}</p>
      <p>${course.startDate}</p>
      <p>${course.duration}</p>
      <p>${course.price}</p>
      <p>${course.description}</p>
   
      `;
            app.appendChild(courseElement);
        });
    });
}
document.addEventListener('DOMContentLoaded', listCourses);
document.addEventListener('DOMContentLoaded', initApp);
