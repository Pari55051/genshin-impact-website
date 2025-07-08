let menuToggle = document.querySelector(".toggle")
let Navigation = document.querySelector(".nav")

menuToggle.onclick = function () {
    menuToggle.classList.toggle("active")
    Navigation.classList.toggle("active")
}

document.querySelector('.open').addEventListener("click", () => {
    document.querySelector(".genshin-text").style.display = "block"
    document.querySelectorAll(".tooltip").forEach( (item) => {
        item.style.display = "none"
    })
})

document.querySelector('.close').addEventListener('click', () =>{
    document.querySelector('.genshin-text').style.display = "none"
    document.querySelectorAll(".tooltip").forEach( (item) => {
        item.style.display = ""
    })
})

// Snap scroll
const sections = document.querySelectorAll(".char-section");
// const dots = document.querySelectorAll(".dot");

// Intersection Observer to detect visible section
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let index = [...sections].indexOf(entry.target);
        updateActiveSection(index);
      }
    });
  },
  { threshold: 0.6 } // Detect when at least 60% of a section is visible
);

sections.forEach((section) => observer.observe(char-section));

function updateActiveSection(index) {
  sections.forEach((section, i) => {
    section.classList.toggle("active", i === index);
  });
}
//   dots.forEach((dot, i) => {
//     dot.classList.toggle("active", i === index);
//   });
// }
