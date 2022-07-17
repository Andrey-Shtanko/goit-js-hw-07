import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(`.gallery`);

const galleryItemsMarkUp = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class = "gallery__item"><img class = "gallery__image" src = "${preview}" alt = "${description}"></div>`
  )
  .join(``);

gallery.innerHTML = galleryItemsMarkUp;
