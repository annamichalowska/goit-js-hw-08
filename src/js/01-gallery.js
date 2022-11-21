// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const placeOfGallery = document.querySelector('.gallery');
const mainGallery = galleryItems;

const createGallery = mainGallery
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join('');

placeOfGallery.insertAdjacentHTML('beforeend', createGallery);

new SimpleLightbox('.gallery a', { captionDelay: 100 });

console.log(galleryItems);
