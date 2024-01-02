const menu = document.querySelector(".menu");
const ul = document.querySelector(".ul");

menu.addEventListener('click', function() {
    ul.classList.toggle('active');
})