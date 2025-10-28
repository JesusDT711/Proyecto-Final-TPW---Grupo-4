//Barra de menú
var navMenu = document.querySelector(".nav-menu");

//Botón hamburguesa
var menuToggle = document.querySelector(".menu-toggle");

//Evento clic del botón hamburguesa
menuToggle.onclick = () => {
    navMenu.classList.toggle("show");
};