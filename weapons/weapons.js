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

// Slider
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
//   centerInsufficientSlides: true,
//   spaceBetween: 0,
  loop: true,
//   slidesPerView: 5,
  coverflowEffect: {
    rotate: 0,
    // stretch: 0,
    // depth: 50,
    // modifier: 7,
    slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true
  },
//   mousewheel: {
//     thresholdDelta: 70
//   },
//   initialSlide: 0,
  on: {
    click(event) {
      swiper.slideTo(this.clickedIndex);
    }
  },
  breakpoints: {
    640: {
      slidesPerView: 4
    }
  }
});