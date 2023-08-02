import { galleryItems } from "./gallery-items.js";
// Change code below this line

const container = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    ({ preview, original, description }) => `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-picture="${original}"
          alt="${description}"
        />
      </a>
    </li>`
  )
  .join("");
container.insertAdjacentHTML("beforeend", markup);
container.addEventListener("click", handlerClick);

function handlerClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  const imgItem = evt.target.dataset.picture;

  const instance = basicLightbox.create(
    `<img src="${imgItem}" width="800" height="600">`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", closeWindow);
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", closeWindow);
      },
    }
  );

  instance.show();

  function closeWindow(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
}
