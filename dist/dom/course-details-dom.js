var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { listAllCourses, listCourseDetailsbyId } from "../services/courses.js";
import { createDiv, createParagraph, createImage, createTitle } from "./dom-modules.js";
function initApp() {
    displayDetailsDisp();
}
const main = document.createElement('main');
main.setAttribute('main', '');
document.body.appendChild(main);
//create a course details div
const courseDetailsDiv = document.createElement('div');
courseDetailsDiv.setAttribute('id', 'course-details-display');
main.appendChild(courseDetailsDiv);
const courseId = location.search.split('=')[1];
//get the response from ResponseModel
function displayDetailsDisp() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = document.querySelector('#course-details-display');
        console.log(app);
        let result;
        const courseId = new URLSearchParams(window.location.search).get('id');
        console.log(courseId);
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
            if (courseId === course.id) {
                const courseElement = createDiv();
                courseElement.setAttribute('course', 'course-card');
                app.appendChild(courseElement);
                courseElement.appendChild(createImage(course.imageUrl, course.id));
                courseElement.appendChild(createTitle(`${course.name}`));
                courseElement.appendChild(createParagraph(`${course.type}`));
                courseElement.appendChild(createParagraph(`${course.description}`));
            }
            // Check if the necessary properties are present in the course object
            else if (!course.name || !course.imageUrl) {
                console.error('Invalid course object:', course);
                return;
            }
            else {
                console.log('no courses match the request id');
            }
            console.log(course.id);
            console.log(course.imageUrl);
            console.log(location);
        });
    });
}
//test 
function tryingAgain() {
    return __awaiter(this, void 0, void 0, function* () {
        let result;
        const courseId = location.search.split('=')[1];
        console.log(courseId);
        try {
            result = yield listCourseDetailsbyId(courseId);
            return result;
        }
        catch (error) {
            console.log('did not work');
            return;
        }
        console.log('fetched this course:', result);
    });
}
//display specific course
//add footer 
// temp doms
// Display the list of courses in the DOM
document.addEventListener('DOMContentLoaded', displayDetailsDisp);
document.addEventListener('DOMContentLoaded', tryingAgain);
