const textContainer = document.querySelector(".text-container");
const introMenu = document.querySelector(".intro-menu");
const up = document.querySelector(".up");
const down = document.querySelector(".down");
const right = document.querySelectorAll(".right");
const singapore = document.getElementById("singafore");

/* BTNs */
const btns = document.querySelectorAll(".btn");
const projectsBtn = document.querySelector(".projectsBtn");
const threatedBtn = document.querySelector(".threatedBtn");
const birdsBtn = document.querySelector(".birdsBtn");
const sdgsBtn = document.querySelector(".sdgsBtn");
const techBtn = document.querySelector(".techBtn");

up.addEventListener("click", () => {
  textContainer.classList.add("hide");
  introMenu.classList.add("show");
  up.classList.add("hide");
  down.classList.add("show");
});
down.addEventListener("click", () => {
  const y =
    document.getElementById("usa").getBoundingClientRect().top + window.scrollY;
  window.scroll({
    top: y,
    behavior: "smooth",
  });
});

right[0].addEventListener("click", () => {
  const y = singapore.getBoundingClientRect().top + window.scrollY;
  window.scroll({
    top: y,
    behavior: "smooth",
  });
});

/* update active button */
// projectsBtn.addEventListener("click", () => {
//   btns.forEach((btn) => {
//     if (btn.classList.contains("active")) projectsBtn.classList.remove("active");
//   });
//   threatedBtn.classList.add("active");
//   console.log(threatedBtn.classList);
// });
