// Função para alternar a visibilidade do menu mobile
const menuHamburger = document.getElementById('menu_hamburger');
const menuMobile = document.getElementById('menu_mobile');

function toggleMenu() {
    menuMobile.classList.toggle('show');
}

menuHamburger.addEventListener('click', toggleMenu);

// script.js

// Função para alternar o menu hamburguer
function toggleMenu() {
    const menuMobile = document.getElementById('menu_mobile');
    menuMobile.classList.toggle('show');
}

// Evento para o clique no botão do menu
document.getElementById('menu_hamburger').addEventListener('click', toggleMenu);

