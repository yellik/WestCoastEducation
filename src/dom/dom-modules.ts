
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


  const createImage = (imageUrl : string, id: string): HTMLElement => {
    const image: HTMLImageElement = document.createElement('img');
    image.setAttribute('src', `src/content/images/courses/${imageUrl}`);
    image.setAttribute('id', id);
  
    return image;
  };
  export {createParagraph, 
    createDiv, 
    createSpan,
    createImage}