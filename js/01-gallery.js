import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
const gallery = document.querySelector(`.gallery`);
const modalOpen = document.querySelector(`.basicLightbox--visible`)

const galleryItemsMarkUp = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class = "gallery__item"><a class = "gallery__link" href = "${original}"><img class = "gallery__image" data-source = "${original}" src = "${preview}" alt = "${description}"></a></div>`
  )
  .join(``);

gallery.innerHTML = galleryItemsMarkUp;

gallery.addEventListener(`click`, selectPicture);

function selectPicture(event) {
  event.preventDefault();
    
  if (event.target.nodeName !== "IMG") {
    return
  }
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
    
`,{
	
    onShow: (instance) => {
    window.addEventListener(`keydown`, closeModal)
  },
	
    onClose: (instance) => {
    window.removeEventListener(`keydown`, closeModal)
  }
})

  instance.show()
  
 function closeModal(event) {
  if (event.code !== `Escape`) {
    return
  }
 instance.close()
}

}


 