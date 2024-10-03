
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todas as seções que você deseja animar ao rolar
    const sections = document.querySelectorAll('.sobre, .beneficios, .video, .local, .produtos, .formulario, .background-rodape, .rodape');

    // Configura o Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Quando a seção entra na viewport, adiciona a classe 'section-visible'
                entry.target.classList.add('section-visible');
            }
        });
    }, { threshold: 0.1 }); // A animação ocorre quando 10% da seção é visível

    // Inicialmente, adiciona a classe 'section-hidden' para esconder todas as seções
    sections.forEach(section => {
        section.classList.add('section-hidden');
        observer.observe(section); // Observa cada seção
    });
});


// Seleciona os elementos do menu e botão hamburguer
const menuHamburger = document.getElementById('menu_hamburger');
const menuMobile = document.getElementById('menu_mobile');
const menuLinks = document.querySelectorAll('#menu_mobile a'); // Seleciona os links do menu mobile

// Função para alternar a visibilidade do menu mobile
function toggleMenu() {
    menuMobile.classList.toggle('show'); // Alterna a classe 'show' para exibir/ocultar o menu
    menuHamburger.classList.toggle('active'); // Alterna a classe 'active' no botão hamburguer
}

// Evento para o clique no botão do menu hamburguer
menuHamburger.addEventListener('click', toggleMenu);

// Evento para fechar o menu mobile ao clicar em qualquer link dentro do menu
menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        menuHamburger.classList.remove('active'); // Remove a classe 'active' do botão
        menuMobile.classList.remove('show'); // Remove a classe 'show' do menu mobile
    });
});

// Evento para fechar o menu ao clicar em qualquer parte do menu mobile (fora dos links)
menuMobile.addEventListener('click', function(event) {
    if (event.target === menuMobile) { // Verifica se o clique foi diretamente no menu mobile e não em um item/link
        menuHamburger.classList.remove('active'); // Remove a classe 'active' do botão
        menuMobile.classList.remove('show'); // Remove a classe 'show' do menu mobile
    }
});
