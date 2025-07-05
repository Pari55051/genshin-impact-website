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