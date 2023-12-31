import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryListEl = document.querySelector('.gallery');
const galleryListItem = createGallery(galleryItems);
galleryListEl.insertAdjacentHTML('beforeend', galleryListItem);

function createGallery(galleryItems) { 
    return galleryItems
        .map(({ preview, original, description }) => {
            return`
            <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`}
    )
        .join('');
 
}

const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250,
 });


console.log(galleryItems);
