import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryListEl = document.querySelector('.gallery');
const galleryListItem = createGallery(galleryItems);
galleryListEl.insertAdjacentHTML('beforeend', galleryListItem);

galleryListEl.addEventListener('click', onGalleryItemClick);

function createGallery(galleryItems) { 
    return galleryItems
        .map(({ preview, original, description }) => {
            return`
            <li class="gallery__item">
            <a class="gallery__link"${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li>`}
    )
        .join('');
 
}

function onGalleryItemClick(evt) { 
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') { 
        return;
    }
    console.log(evt.target);

    const instance = basicLightbox.create(`
    <img src = "${evt.target.dataset.source}" width="800" height="600">
`);

    instance.show();
    
    document.addEventListener('keyup', closeModal)
    function closeModal (evt){
    if (evt.code === 'Escape') {
        instance.close();
    }}
}

console.log(galleryItems);



