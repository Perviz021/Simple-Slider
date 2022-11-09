let sliderImages = document.querySelectorAll(".lenta img");
let slider = document.querySelector(".mainSlider img");

for (let i = 0; i < sliderImages.length; i++) {
  sliderImages[i].addEventListener("click", function () {
    //find currently shown image and delete active class from it
    document.querySelector(".lenta img.active").classList.remove("active");

    //add active to the clicked img
    this.classList.add("active");

    //change the image on main slider to the clicked img
    slider.setAttribute("src", this.getAttribute("src"));
  });
}

let left = document.querySelector("i[class*='left']");
let right = document.querySelector("i[class*='right']");

// right button event
right.addEventListener("click", function () {
  Slide("next");
});

// left button event
left.addEventListener("click", function () {
  Slide("prev");
});

// both buttons will use this function
function Slide(dir) {
  // find active img and deletes its active class
  let activeImg = document.querySelector(".lenta img.active");
  activeImg.classList.remove("active");

  //eger funksiya cagrilanda dir=next idise, onda nextSibling'e beraber edir, otherwise prevoiusSiblinge
  let nextElement;
  if (dir == "next") {
    nextElement = activeImg.nextElementSibling;
  } else if (dir == "prev") {
    nextElement = activeImg.previousElementSibling;
  }

  //eger nextElement null deyilse
  if (nextElement) {
    nextElement.classList.add("active");
    slider.setAttribute("src", nextElement.getAttribute("src"));
  } else {
    //eger nextElement null olarsa, her biri ucun ayri sert yazilmalidir.
    if (dir == "next") {
      sliderImages[0].classList.add("active");
      slider.setAttribute("src", sliderImages[0].getAttribute("src"));
    } else if (dir == "prev") {
      sliderImages[sliderImages.length - 1].classList.add("active");
      slider.setAttribute(
        "src",
        sliderImages[sliderImages.length - 1].getAttribute("src")
      );
    }
  }
}
