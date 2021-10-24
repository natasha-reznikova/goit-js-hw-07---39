import { galleryItems } from './gallery-items.js';



const gallaryList = document.querySelector('.gallery');
// const modalOpen = document.querySelector('.js-lightbox')
// const imgOfModal = document.querySelector('.lightbox__image')
// console.log(imgOfModal)




 const markup = galleryItems.map(({ preview, original, description }) => {
     return  `
<div class="gallery__item">
  <a class="gallery__link" href="#">
    <img
      class="gallery__image"
       src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>` }).join('')

// console.log(markup)

gallaryList.insertAdjacentHTML('beforeend', markup)
gallaryList.addEventListener('click', onImgClick)


function onImgClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG") {
        return;
    }
 const image = evt.target.getAttribute('data-source')
 const instance = basicLightbox.create(`<img src="${image}" width="800" height="600">`)

instance.show() 
}


 


