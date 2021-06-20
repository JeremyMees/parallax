let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();
const add1 = document.querySelector("#add1");
const add2 = document.querySelector("#add2");
const add3 = document.querySelector("#add3");
const add1titel = document.querySelector("#add1titel");
const add2titel = document.querySelector("#add2titel");
const add3titel = document.querySelector("#add3titel");
const add1content = document.querySelector("#add1content");
const add2content = document.querySelector("#add2content");
const add3content = document.querySelector("#add3content");
const close = document.querySelector("#closeModal");
const popup = document.querySelector(".popup");
const open = document.querySelectorAll("#openModal");

timeline
  .to(".rock", 10, { y: -300 })
  .to(".girl", 10, { y: -200 }, "-=10")
  .fromTo(".bg1", { y: -50 }, { y: 0, duration: 10 }, "-=10")
  .to(".content", 10, { top: "0%" }, "-=10")
  .fromTo(".wild", { opacity: 0 }, { opacity: 1, duration: 1 })
  .fromTo(".slideshow-container", { opacity: 0 }, { opacity: 1, duration: 1 });

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "300%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);

var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

add1titel.addEventListener("click", () => {
  add1.innerHTML === "add" ? (add1.innerHTML = "remove") : (add1.innerHTML = "add");
  add1content.classList.toggle("hidden");
});

add2titel.addEventListener("click", () => {
  add2.innerHTML === "add" ? (add2.innerHTML = "remove") : (add2.innerHTML = "add");
  add2content.classList.toggle("hidden");
});

add3titel.addEventListener("click", () => {
  add3.innerHTML === "add" ? (add3.innerHTML = "remove") : (add3.innerHTML = "add");
  add3content.classList.toggle("hidden");
});

close.addEventListener("click", () => {
  popup.classList.add("hidden");
});

open.forEach((event) => {
  event.addEventListener("click", () => {
    popup.classList.remove("hidden");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
});
