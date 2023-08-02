import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
//     description: 'Hokkaido Flower',
//   },

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

  // console.log(instance);
  instance.show();
  function closeWindow(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
}
