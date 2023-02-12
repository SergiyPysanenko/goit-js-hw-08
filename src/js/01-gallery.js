// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import '../css/common.css';
import '../css/01-gallery.css';

// Change code below this line

const galleryImagesContainer = document.querySelector('.gallery');

const imageGalleryMarkup = galleryItems.map(item => `
  <a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
  </a>
`).join('');

galleryImagesContainer.innerHTML = imageGalleryMarkup;
galleryImagesContainer.addEventListener('click', onClickGalleryImage);

function onClickGalleryImage(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== 'IMG') {
    return;
  }; 
}

const lightbox = new SimpleLightbox('.gallery a', { 
  captionsData: 'alt',
  captionDelay: 250,
});

galleryRef.addEventListener("click", openModalGallery);

function openModalGallery(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") return;
    
    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="1280" height="auto">`, {
        onShow: () => window.addEventListener("keydown", onEsc),
        onClose: () => window.removeEventListener("keydown", onEsc)
    });
        
        function onEsc(event) {
            if (event.code === "Escape") {
                instance.close();
              }
          }
    instance.show();
  }