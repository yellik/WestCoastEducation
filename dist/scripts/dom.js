
const createCourseCard = (course) => {
  const div = document.createElement('div');
  div.classList.add('course-image');
  div.appendChild(createImage(course.imageUrl, course.id));
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
  image.setAttribute('src', `src/content/images/courses/${imageUrl}`);
  image.setAttribute('id', id);

  return image;
};

const createCourseInfo = (course) => {
  const paragraph = document.createElement('p');
  paragraph.appendChild(
    document.createTextNode(`${course.name} This course is taught:${course.type} Current cost${course.cost} Average rating:${course.avrRating}`)
  );

  return paragraph
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
    
    container.setAttribute('courseId', course.id);
    container.classList.add('admin-course-cards')

    const lowerCaseCourseName = course.name.toLowerCase(); // Convert course name to lowercase


    container.appendChild(createSpan(course.name));
    container.appendChild(createSpan(`This course is taught: ${course.type}`));
    container.appendChild(createSpan(`Starting date: ${course.startDate}`));
    container.appendChild(createSpan(`it runs for: ${course.duration}`));
   
    //
    //xreate a student div through the dom
    const studentContainer = createDiv();
    studentContainer.classList.add('student-section')
    // Find students enrolled in the current course
    const enrolledStudents = students.filter((student) => student.course && student.course.toLowerCase() === lowerCaseCourseName);
      const studentList = document.createElement('ul');
      enrolledStudents.forEach((student) => {
        const listItem = document.createElement('li');
        listItem.innerText = `Enrolled: ${student.name}`;
        studentList.appendChild(listItem);

       
      });
      if (enrolledStudents.length > 5) {
        const message = document.createElement('p');
        message.style.backgroundColor = "green";
        message.style.color = 'white';
        message.innerText = `Over five students have signed up to this course. It will definetly be running`;
        studentContainer.appendChild(message);
      }
      studentContainer.appendChild(studentList);
    
    //element.appendChild(studentContainer);
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

const createButton = (text, onClick) => {
  const button = document.createElement('button');
  button.innerText = text;
  button.addEventListener('click', onClick);
  return button;
};

// Example handlers for edit and delete buttons
const handleEditCourse = (courseId) => {
  console.log(courseId);
  location.href = `/pages/edit-course.html?id=${courseId}`;
};


export { createCourseCard, 
  createStudentCard, 
  addCourseImageClickHandler, 
  createCourseList, 
  mergeCoursesWithStudents,
  createButton,
  handleEditCourse
 };