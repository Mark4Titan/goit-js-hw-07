// insertAdjacentHTML()
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

const newGallery = document.querySelector("ul#gallery");

let newImages;

const imgArray = images.forEach((image) => {
  if (newImages == undefined) {
    return (newImages = `<li class="list-style"><img class="image-style" src="${image.url} 
        alt="${image.alt}" width='310' height='210'></img></li>`);
  } else {
    return (newImages += `<li class="list-style"><img class="image-style" src="${image.url}
         alt="${image.alt}" width='310' height='210'></img></li>`);
  }
});

newGallery.insertAdjacentHTML("beforeend", newImages);
