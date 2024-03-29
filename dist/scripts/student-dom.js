
const createStudentCard = (student) => {
  const div = document.createElement('div');
  div.classList.add('student-image');
  div.appendChild(createImage(student.imageUrl, student.id));
  div.appendChild(createStudentInfo(student));

  return div;

  
};


const createImage = (imageUrl, id) => {
  const image = document.createElement('img');
  image.setAttribute('src', `/src/content/images/students/${imageUrl}`);
  image.setAttribute('id', id);

  return image;
};

const createStudentInfo = (student) => {
  const div = document.createElement('div');
  div.appendChild(

    document.createTextNode(`This student is called: ${student.name}, 
    He or she is studying: ${student.course}, 
    their email is: ${student.username} 
    their number is: ${student.mobileNumber}, 
    ${student.invoiceAdress}`)
    )
  return div;

};



// createstudentList som tar två argument
// 1. listan av bilar
// 2. Vilket element som vi ska addera bilarna till
const createStudentList = (students, element) => {
  // Loopa igenom alla bilar students
  // För varje bil skapa en div
  // Den skapade diven skall läggas till element som vi skickade in
  students.forEach((student) => {
    const container = createDiv();
    container.setAttribute('studentid', student.id);
    container.appendChild(createSpan(student.name));
    container.appendChild(createSpan(`This student is enrolled in: ${student.course}`));
    container.appendChild(createSpan(`student's email address is ${student.username}`));
    container.appendChild(createSpan(`student's invoice address is: ${student.invoiceAdress}`));
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

const addStudentImageClickHandler = (images) => {
  images.forEach((image) => {
    const src = image.getAttribute('src');
    const studentId = image.getAttribute('id');
    

    image.addEventListener('click', () => {
      console.log(location);
      location.href = `src\pages\course-detail-page.html?id=${courseId}`;
    });
  });
};


export { createStudentCard, addStudentImageClickHandler, createStudentList};