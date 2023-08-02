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

const container = document.querySelector("gallery");
const markup = galleryItems.map(
  ({ preview, original, description }) =>
    `<li><img src="${preview}" data-scr="${original}" alt="${description}" width="300"/></li>`
);
container.insertAdjacentHTML("beforeend", markup.join(""));

console.log(container);

// const instance = basicLightbox.create(`
//     <h1>Dynamic Content</h1>
//     <p>You can set the content of the lightbox with JS.</p>
// `);

// console.log(instance);
// instance.show();
