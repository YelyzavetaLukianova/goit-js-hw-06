const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryRef = document.querySelector(".gallery");

const markup = images
  .map(({ url, alt }) => {
    return `<li><img class="item" src="${url}" alt="${alt}" width="200"/></li>`;
  })
  .join("");

galleryRef.insertAdjacentHTML("beforeend", markup);

// const liRefs = images.map((image) => {
//   const liRef = document.createElement("li");
//   const liRefImage = document.createElement("img");
//   liRefImage.setAttribute("src", image.url);
//   liRefImage.setAttribute("alt", image.alt);
//   liRefImage.classList.add("width", "height");
//   liRef.append(liRefImage);
//   return liRef;
// });

// galleryRef.insertAdjacentHTML("afterbegin", galleryRef);
// console.log(galleryRef);
