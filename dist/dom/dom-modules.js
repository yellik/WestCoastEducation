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
const createTitle = (text) => {
    const h1 = document.createElement('h1');
    h1.textContent = text;
    return h1;
};
const createImage = (imageUrl, id) => {
    const image = document.createElement('img');
    // Construct the absolute URL based on the root of the project
    const absoluteImageUrl = new URL(`src/content/images/courses/${imageUrl}`, window.location.origin).toString();
    image.setAttribute('src', absoluteImageUrl);
    image.setAttribute('id', id);
    return image;
};
const addCourseImageClickHandler = (images) => {
    images.forEach((image) => {
        const src = image.getAttribute('src');
        const courseId = image.getAttribute('id');
        image.addEventListener('click', () => {
            console.log(location);
            location.href = `src/pages/course-detail-page.html?id=${courseId}`;
        });
    });
};
export { createParagraph, createDiv, createSpan, createImage, createTitle, addCourseImageClickHandler };
