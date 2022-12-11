
import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const galeryListOne = galeryList(galleryItems);
gallery.insertAdjacentHTML('beforeend', galeryListOne);

function galeryList(galleryItems) {
  return galleryItems
  .map(({ preview, original, description }) =>
  `  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
).join('');
}



const lightbox = new SimpleLightbox(".gallery__item", {
 captionsData: "alt",
 captionDelay: 250,
});
