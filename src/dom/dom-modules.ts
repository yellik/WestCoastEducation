
const createParagraph = (text: string): HTMLParagraphElement => {
    const p: HTMLParagraphElement = document.createElement('p');
    p.textContent = text;
    return p;
  };

  const createDiv = () => {
    return document.createElement('div');
};

const createSpan = (text: string): HTMLSpanElement => {
    const span: HTMLSpanElement = document.createElement('span');
    span.textContent = text;
    return span;
  };

const createTitle = (text: string): HTMLElement => {
    const h1: HTMLElement = document.createElement('h1');
    h1.textContent = text;
    return h1;
  };


  const createImage = (imageUrl : string, id: string): HTMLElement => {
    const image: HTMLImageElement = document.createElement('img');
    image.setAttribute('src', `src/content/images/courses/${imageUrl}`);
    image.setAttribute('id', id);
  
    return image;
  };

  const addCourseImageClickHandler = (images: HTMLImageElement[]) => {
    images.forEach((image : HTMLImageElement) => {
      const src = image.getAttribute('src');
      const courseId = image.getAttribute('id');
      
  
      image.addEventListener('click', () => {
        console.log(location);
        location.href = `src/pages/course-detail-page.html?id=${courseId}`;
      });
    });
  };
  
  export {createParagraph, 
    createDiv, 
    createSpan,
    createImage,
    createTitle,
    addCourseImageClickHandler
    }