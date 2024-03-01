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
import { createDiv, createParagraph, createImage } from "./dom-modules.js";
function initApp() {
    listCourses();
}
function listCourses() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = document.querySelector('#courseList');
        //app.innerHTML = '';
        console.log(app);
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
            const courseElement = createDiv();
            courseElement.setAttribute('course', 'course-card');
            app.appendChild(courseElement);
            // Check if the necessary properties are present in the course object
            if (!course.name || !course.imageUrl) {
                console.error('Invalid course object:', course);
                return;
            }
            const courseTitle = document.createElement('h1');
            courseElement.appendChild(createImage(course.imageUrl, course.id));
            courseElement.appendChild(courseTitle);
            courseElement.appendChild(createParagraph(`${course.type}`));
            courseElement.appendChild(createParagraph(`${course.description}`));
            courseElement.appendChild(createParagraph(`This course starts on: ${course.startDate}`));
            courseElement.appendChild(createParagraph(`This couse takes: ${course.duration} days to complete`));
            courseElement.appendChild(createParagraph(`The total cost is EUR ${course.price}`));
        });
    });
}
document.addEventListener('DOMContentLoaded', listCourses);
document.addEventListener('DOMContentLoaded', initApp);
