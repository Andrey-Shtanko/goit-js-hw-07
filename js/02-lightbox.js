import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(`.gallery`);
const galleryItemsMarkUp = galleryItems.map(({ preview, original, description }) =>
    `<li><a class = "gallery__item" href="${original}"><img class = "gallery__image" src = "${preview}" alt = "${description}" title = "${description}" ></a></li>`
).join(``)
gallery.innerHTML = galleryItemsMarkUp;

var lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 });



