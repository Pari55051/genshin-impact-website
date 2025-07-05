// sidebar

let menuToggle = document.querySelector(".toggle")
let Navigation = document.querySelector(".nav")

menuToggle.onclick = function () {
    menuToggle.classList.toggle("active")
    Navigation.classList.toggle("active")
}

let list = document.querySelectorAll(".sidebar-li")

for (let i = 0; i < list.length; i++) {
    list[i].onclick = function () {
        let j = 0;
        while (j < list.length) {
            list[j++].className = "sidebar-li"
        }
        list[i].className = "sidebar-li";
    }
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

// nations