// Função para alternar a visibilidade do menu mobile
const menuHamburger = document.getElementById('menu_hamburger');
const menuMobile = document.getElementById('menu_mobile');

function toggleMenu() {
    menuMobile.classList.toggle('show');
}

menuHamburger.addEventListener('click', toggleMenu);



// Evento para o clique no botão do menu
document.getElementById('menu_hamburger').addEventListener('click', toggleMenu);

// Adiciona um evento de clique ao botão hamburguer para abrir/fechar o menu
menuHamburger.addEventListener('click', function() {
    menuHamburger.classList.toggle('active');
    menuMobile.classList.toggle('active');
    });
    
    // Adiciona eventos de clique a cada link do menu mobile para fechar o menu
    menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        menuHamburger.classList.remove('active'); // Remove a classe 'active' do botão
        menuMobile.classList.remove('active'); // Remove a classe 'active' do menu mobile
    });
    });