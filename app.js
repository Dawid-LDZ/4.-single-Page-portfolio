function start() {
  addElementToBlocs();
  addCarouselSlide();
  addElementToGallery();
  addSlides();
}

function blocksElement(id, picture, title, width, pattern) {
  const wrapper = document.createElement("div");
  const pictureElement = document.createElement("img");
  const titleElement = document.createElement("h3");

  pictureElement.src = picture;
  titleElement.innerText = title;

  wrapper.insertAdjacentElement("afterbegin", pictureElement);
  wrapper.insertAdjacentElement("beforeend", titleElement);

  wrapper.classList.add("block");
  wrapper.classList.add(id);
  wrapper.setAttribute("id", id);
  wrapper.setAttribute("style", pattern);
  titleElement.classList.add("block_title");
  pictureElement.setAttribute("alt", "shapes");
  pictureElement.setAttribute("width", width);

  console.log(wrapper);

  document.querySelector("#blocks").insertAdjacentElement("beforeend", wrapper);
  document
    .getElementById(id)
    .insertAdjacentElement("afterbegin", pictureElement);
  document.getElementById(id).insertAdjacentElement("beforeend", titleElement);
}
function addElementToBlocs() {
  const blocksData = [
    {
      id: "graphic",
      picture: "assets/pattern-graphic-design.svg",
      title: "Graphic Design",
      width: "128",
      pattern: "background-color:#755cde",
    },
    {
      id: "ui",
      picture: "assets/pattern-ui-ux.svg",
      title: "UI/UX",
      width: "64",
      pattern: "background-color:#f6a560",
    },
    {
      id: "apps",
      picture: "assets/pattern-apps.svg",
      title: "Apps",
      width: "64",
      pattern: "background-color:#f39e9e",
    },
    {
      id: "illustrations",
      picture: "assets/pattern-illustrations.svg",
      title: "Illustrations",
      width: "128",
      pattern: "background-color:#eb7565",
    },
    {
      id: "photography",
      picture: "assets/pattern-photography.svg",
      title: "Photography",
      width: "160",
      pattern: "background-color:#61c4b7",
    },
    {
      id: "motion",
      picture: "assets/pattern-motion-graphics.svg",
      title: "Motion Graphics",
      width: "128",
      pattern: "background-color:#552049",
    },
  ];
  blocksData.map((e) => {
    console.log(e);
    blocksElement(e.id, e.picture, e.title, e.width, e.pattern);
  });
}

function addCarouselSlide() {
  const wrapper1 = document.createElement("div");
  wrapper1.classList.add("carousel-slide");
  console.log(wrapper1);
  document
    .querySelector(".carousel-container")
    .insertAdjacentElement("beforeend", wrapper1);
}

function galleryElement(id_no, pic, picalt) {
  const wrapper2 = document.createElement("div");
  const picture = document.createElement("img");
  const adress = document.createElement("a");

  picture.src = pic;
  adress.href = pic;

  wrapper2.insertAdjacentElement("afterbegin", adress);
  adress.insertAdjacentElement("afterbegin", picture);

  wrapper2.classList.add("slide");
  //wrapper2.setAttribute("id", id_no);//
  picture.classList.add("thumbnail");
  picture.setAttribute("alt", picalt);

  document
    .querySelector(".carousel-slide")
    .insertAdjacentElement("beforeend", wrapper2);
  //document.getElementById(id_no).insertAdjacentElement("afterbegin", adress);
}

function addElementToGallery() {
  const galleryData = [
    {
      id_no: "0",
      pic: "/assets/image-slide-3.jpg",
      picalt: "Amy's project",
    },
    {
      id_no: "01",
      pic: "/assets/image-slide-4.jpg",
      picalt: "Amy's project",
    },
    {
      id_no: "02",
      pic: "/assets/image-slide-5.jpg",
      picalt: "Amy's project",
    },
    {
      id_no: "03",
      pic: "/assets/image-slide-1.jpg",
      picalt: "Amy's project",
    },
    {
      id_no: "04",
      pic: "/assets/image-slide-2.jpg",
      picalt: "Amy's project",
    },
  ];
  galleryData.map((e) => {
    console.log(e);
    galleryElement(e.id_no, e.pic, e.picalt);
  });
}

function addSlides() {
  const slides = document.querySelector(".carousel-slide");

  const first_slide_clone = slides.children[0].cloneNode(true);
  const last_slide_clone =
    slides.children[slides.children.length - 1].cloneNode(true);

  slides.insertBefore(last_slide_clone, slides.children[0]);
  slides.appendChild(first_slide_clone);

  first_slide_clone.setAttribute("id", "firstClone");
  last_slide_clone.setAttribute("id", "lastClone");
}

start();

const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide");
const carouselWidth = document.querySelector(".carousel-container");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let counter = 1;
const size = carouselWidth.clientWidth;
let imageArr = carouselImages[0].childNodes;
console.log(imageArr);

carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

nextBtn.addEventListener("click", () => {
  nextBtn.classList.add("disable");
  setTimeout(() => {
    nextBtn.classList.remove("disable");
  }, 500);
  if (counter >= carouselImages[0].childNodes.length - 1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  console.log(counter);
  console.log(imageArr);
});

prevBtn.addEventListener("click", () => {
  prevBtn.classList.add("disable");
  setTimeout(() => {
    prevBtn.classList.remove("disable");
  }, 500);
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

carouselSlide.addEventListener("transitionend", () => {
  if (carouselImages[0].childNodes[counter].id === "lastClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages[0].childNodes.length - 2;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (carouselImages[0].childNodes[counter].id === "firstClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages[0].childNodes.length - counter;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});
