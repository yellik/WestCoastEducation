const createParagraph = (text) => {
    const p = document.createElement('p');
    p.textContent = text;
    return p;
};
const createDiv = () => {
    return document.createElement('div');
};
const createSpan = (text) => {
    const span = document.createElement('span');
    span.textContent = text;
    return span;
};
const createImage = (imageUrl, id) => {
    const image = document.createElement('img');
    image.setAttribute('src', `src/content/images/courses/${imageUrl}`);
    image.setAttribute('id', id);
    return image;
};
export { createParagraph, createDiv, createSpan, createImage };
