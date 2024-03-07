
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

const createMessage = (backgroundColor, color, text) => {
  const message = document.createElement('p')
  message.style.backgroundColor = backgroundColor;
  message.style.color = color;
  message.innerHTML = text;
  return message
}

const mergeCoursesWithStudents = (courses, students, element) => {
  courses.forEach((course) => {
    const container = createDiv();
    
    container.setAttribute('courseId', course.id);
    container.classList.add('admin-course-cards')

    const lowerCaseCourseName = course.name.toLowerCase(); // Convert course name to lowercase


    container.appendChild(createSpan(course.name));
    // Find students enrolled in the current course
    const enrolledStudents = students.filter((student) => student.course && student.course.toLowerCase() === lowerCaseCourseName);
      
      const studentList = document.createElement('ul');
      enrolledStudents.forEach((student) => {
        const listItem = document.createElement('li');
        listItem.innerText = `${student.name}`;
        studentList.appendChild(listItem);
        console.log(studentList)
       
      });
      if (enrolledStudents.length > 4) {
        const message = createMessage('green', 'white', 'More than 5 students signed up for this course. It will definetly be running');
        container.appendChild(message);
        container.appendChild(createSpan('Students enrolled'))
      } else if(enrolledStudents.length > 0) {
        console.log(enrolledStudents.length);
        const message = createMessage('yellow', 'black', 'Less than 5 students have signed up for this course. It might not be running');
        container.appendChild(message);
        container.appendChild(createSpan('Students enrolled'))
      } else if (enrolledStudents.length == 0) {
        const message = createMessage('red', 'white', 'No one has signed up for this course just yet.');
        container.appendChild(message);
      }
      
    
    //element.appendChild(studentContainer);
    element.appendChild(container);
    container.appendChild(studentList);
    
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