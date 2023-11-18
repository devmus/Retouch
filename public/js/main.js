const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
}))

const images = document.querySelectorAll(".project-img");
const filters = document.querySelectorAll(".filter");
const texts = document.querySelectorAll(".project-text")

filters.forEach((filter, index) => {
    filter.addEventListener("mouseover", () => {
        filter.classList.toggle("filter-active");
        images[index].classList.toggle("project-img-active");
        texts[index].classList.toggle("project-text-active");
    });

    filter.addEventListener("mouseout", () => {
        filter.classList.remove("filter-active");
        images[index].classList.remove("project-img-active");
        texts[index].classList.remove("project-text-active");
    });
});

