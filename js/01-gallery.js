import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const newGalleryEl = galleryItems.map(({preview, original, description}) =>
	`<div class="gallery__item">
		<a class="gallery__link" href="${original}">
    		<img
      		class="gallery__image"
      		src="${preview}"
      		data-source="${original}"
      		alt="${description}"/>
	  </a>
	</div>`).join("");

galleryEl.innerHTML = newGalleryEl;

galleryEl.addEventListener("click", (event) => {
	event.preventDefault();

	if (event.target.nodeName !== "IMG") {
    return;
	}
	const imgUrl = event.target.dataset.source;

	return showImgModal(imgUrl);
})


const showImgModal = (imgUrl) => {
		const instance = basicLightbox.create(`<img src="${imgUrl}" width="1280" height="853">`, {
		
		onShow: (instance) => {
			console.log('onShow', instance);

			document.addEventListener("keyup", checkEsc);
		},
		onClose: (instance) => {
			console.log('onClose', instance);

			document.removeEventListener("keyup", checkEsc);
		}
	})

	instance.show();

	function checkEsc({ code }) {
		console.log(code);
		if (code === "Escape") {
			instance.close();
		}
	}
} 



	