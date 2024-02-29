
const createCourseCard = (course) => {
  const div = document.createElement('div');
  div.classList.add('course-image');
  div.appendChild(createCourseImage(course.imageUrl, course.id));
  div.appendChild(createCourseInfo(course));
  
  return div;

  
};

const createStudentCard = (student) => {
  const div = document.createElement('div');
  div.classList.add('student-image');
  div.appendChild(createImage(student.imageUrl, student.id))
  div.appendChild(createStudentInfo(student))

  return div;
}


const createImage = (imageUrl, id) => {
  const image = document.createElement('img');
  image.setAttribute('src', `../content/images-new/${imageUrl}`);
  image.setAttribute('id', id);

  return image;
};

const createCourseInfo = (course) => {
  const paragraph = document.createElement('p');
  paragraph.appendChild(
    document.createTextNode(`${course.name} This course is taught:${course.type} Current cost${course.cost} Average rating:${course.avrRating}`)
  );

  return paragraph;
};


const createCourseList = (courses, element) => {
  courses.forEach((course) => {
    const container = createDiv();
    container.setAttribute('courseid', course.id);
    container.appendChild(createSpan(course.name));
    container.appendChild(createSpan(`This course is taught:  ${course.type}`));
    container.appendChild(createSpan(`Course brief: ${course.description}`));
    container.appendChild(createSpan(`Course rating: ${course.avrRating}`));
    element.appendChild(container);
 
  });
};

const mergeCoursesWithStudents = (courses, students, element) => {
  courses.forEach((course) => {
    const container = createDiv();
    container.setAttribute('courseid', course.id);
    container.appendChild(createSpan(course.imageUrl));
    container.appendChild(createSpan(course.name));
    container.appendChild(createSpan(`This course is taught: ${course.type}`));
    container.appendChild(createSpan(`Course brief: ${course.description}`));
    container.appendChild(createSpan(`Course rating: ${course.avrRating}`));

    // Find students enrolled in the current course
    const enrolledStudents = students.filter((student) => student.course === course.name);
    if (enrolledStudents.length > 0) {
      const studentList = document.createElement('ul');
      enrolledStudents.forEach((student) => {
        const listItem = document.createElement('li');
        listItem.innerText = `Enrolled: ${student.name}`;
        studentList.appendChild(listItem);
      });
      container.appendChild(studentList);
    }

    element.appendChild(container);
  });
};


const createDiv = () => {
  // const div = document.createElement('div');
  // return div;
  return document.createElement('div');
};

const createSpan = (text) => {
  const span = document.createElement('span');
  span.innerText = text;
  return span;
};

const addCourseImageClickHandler = (images) => {
  images.forEach((image) => {
    const src = image.getAttribute('src');
    const courseId = image.getAttribute('id');
    

    image.addEventListener('click', () => {
      console.log(location);
      location.href = `/pages/course-details.html?id=${courseId}`;
    });
  });
};


export { createCourseCard, 
  createStudentCard, 
  addCourseImageClickHandler, 
  createCourseList, 
  mergeCoursesWithStudents
 };