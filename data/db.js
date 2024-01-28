{
const courses = [
  {
    "id": 1,
    "name": "Javascript",
    "imageUrl": "student1.png",
    "description": "the best course in the world",
    "avrRating": "4.5",
    "type": "on demand",
    "teacherName": "Will Smith"
  },
  {
    "id": 2,
    "name": "Python",
    "imageUrl": "student2.png",
    "description": "Makes you smart...",
    "avrRating": "4",
    "type": "in-class",
    "teacherName": "Adam Sandler"
  },
  {
    "id": 3,
    "name": "Solidity",
    "imageUrl": "student3.jpeg",
    "description": "It's got a cool name",
    "avrRating": "5",
    "type": "on demand",
    "teacherName": "Obi-van-Kenobi"
  },
  {
    "id": 4,
    "name": "Solidity",
    "imageUrl": "student3.jpeg",
    "description": "It's got a cool name",
    "avrRating": "5",
    "type": "on demand",
    "teacherName": "Obi-van-Kenobi"
  },
  {
    "courseName": "Big Data",
    "type": "on-demand",
    "avrRating": "3",
    "teacherName": "Angelina Jolie",
    "imageUrl": "no-car.png",
    "description": "hello Jolie",
    "id": 5
  },
  {
    "courseName": "C#",
    "type": "in-class",
    "avrRating": "6",
    "teacherName": "Peter Pan",
    "imageUrl": "student1.jpeg",
    "description": "fairy dust ",
    "id": 6
  },
  {
    "name": "typescript",
    "type": "remore",
    "avrRating": "6",
    "teacherName": "Angelina Jolie",
    "imageUrl": "student4.jpeg",
    "description": "hello",
    "id": 7
  },
]
const students = [
  {
    "name": "Pippi",
    "surname": "Longstockings",
    "email": "pippi.long@gmail.com"
},
  {
    "name": "Freddy",
    "surname": "Mercury",
    "email": "fred@queen.com"
  }

]
}

const listAllCourses = () => courses;
const listAllStudents = () => students;

// Exportera listAllVehicles funktionen
// export default listAllVehicles;
export { listAllCourses, listAllStudents};
