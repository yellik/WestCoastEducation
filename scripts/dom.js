
const createCourseCard = (course) => {
  const div = document.createElement('div');
  div.classList.add('course-image');
  div.appendChild(createCourseImage(course.imageUrl, course.id));
  div.appendChild(createCourseInfo(course));

  return div;

  
};
const createTestimonialCard = (testimonial) => {
  const div = document.createElement('div');
  div.classList.add('testimonial-image');
  div.appendChild(createTestimonialImage(testimonial.imageUrl, testimonial.id));
  div.appendChild(createTestimonialInfo(testimonial));

  return div;

  
};

const createCourseImage = (imageUrl, id) => {
  const image = document.createElement('img');
  image.setAttribute('src', `../content/images-new/${imageUrl}`);
  image.setAttribute('id', id);

  return image;
};

const createCourseInfo = (course) => {
  const paragraph = document.createElement('p');
  paragraph.appendChild(
    document.createTextNode(`${course.name} ${course.type} ${course.avrRating}`)
  );

  return paragraph;
};

const createTestimonialImage = (imageUrl, id) => {
  const image = document.createElement('img');
  image.setAttribute('src', `../content/images-new/${imageUrl}`);
  image.setAttribute('id', id);

  return image;
};

const createTestimonialInfo = (testimonial) => {
  const paragraph = document.createElement('p');
  paragraph.appendChild(
    document.createTextNode(`${testimonial.name} ${testimonial.name}`)
  );

  return paragraph;
};

//These are the details on the admin page
// createcourseList som tar två argument
// 1. listan av alla object
// 2. Vilket element som vi ska addera objekten till
const createCourseList = (courses, element) => {
  // Loopa igenom alla courses
  // För varje kurs skapa en div
  // Den skapade diven skall läggas till element som vi skickade in
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


export { createCourseCard, addCourseImageClickHandler, createCourseList, mergeCoursesWithStudents, createTestimonialCard };