import { createTestimonialCard } from './dom.js';
import  HttpClient from './http.js';

const testimonialDisplay = document.querySelector('#testimonials');

async function initPage() {
  const testimonials = await loadTestimonials();

  courses.forEach((testimonial) => {
    testimonialDisplay.appendChild(createTestimonialCard(testimonial));
  });


  // Hämta in alla bilder och knyt en klick händelse till varje bild...
  const images = document.querySelectorAll('. testimonials-image img');
  addCourseImageClickHandler(images);
}

const loadTestimonials = async () => {
  const url = 'http://localhost:3000/testimonials';
  // create a new http instance...
  const http = new HttpClient(url);
  // Kom ihåg att invänta http.get metoden med await...
  const testimonial = await http.get();
  return testimonial;
};


document.addEventListener('DOMContentLoaded', initPage);
