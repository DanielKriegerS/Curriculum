// Garante que a página terá sido carregada, antes de iniciar os processos
document.addEventListener("DOMContentLoaded", function () {
    // Indexa todos os links da nav e todas as seções da página
    const navLinks = document.querySelectorAll('#mainNav a');
    const sections = document.querySelectorAll('section');

    // Adiciona um evento de clique a cada link de navegação
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Impede o comportamento padrão do link
            
            // Obtém o ID da seção associada ao link
            const targetSectionId = link.getAttribute('href').substring(1);

            // Fecha todas as seções antes de abrir a nova seção
            sections.forEach(function (section) {
                section.style.display = 'none';
            });
            
            // Seleciona a seção alvo pelo ID
            const targetSection = document.getElementById(targetSectionId);

            // Altera o estilo da seção para display: block
            targetSection.style.display = 'block';

            // Rolar a página para a seção, suave
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth' 
            });
        });
    });

    sections.forEach(function (section) {
        section.style.display = 'none';
    });

// Indexando relativos a seção about
const aboutLabel = document.querySelector('#aboutLabel');
const aboutSection = document.querySelector('#aboutSection');
// Mostrando a seção about
aboutLabel.addEventListener('click', function() {
    if(aboutSection.style.display == 'none'){
        aboutSection.style.display = 'block';
    } else {
        aboutSection.style.display = 'none'; 
    }
})

// Indexando relativos a seção experiences
const experienceLabel = document.querySelector('#experienceLabel');
const experienceSection = document.querySelector('#experienceSection');
// Mostrando a seção experiences
experienceLabel.addEventListener('click', function() {
    if(experienceSection.style.display == 'none'){
        experienceSection.style.display = 'block';
    } else {
        experienceSection.style.display = 'none'; 
    }
})

// Indexando relativos a seção curses
const curseLabel = document.querySelector('#curseLabel');
const curseSection = document.querySelector('#curseSection');
// Mostrando a seção curses
curseLabel.addEventListener('click', function() {
    if(curseSection.style.display == 'none'){
        curseSection.style.display = 'block';
    } else {
        curseSection.style.display = 'none'; 
    }
})

// Indexando relativos a seção obs
const obsLabel = document.querySelector('#obsLabel');
const obsSection = document.querySelector('#obsSection');
// Mostrando a seção obs
obsLabel.addEventListener('click', function() {
    if(obsSection.style.display == 'none'){
        obsSection.style.display = 'block';
    } else {
        obsSection.style.display = 'none'; 
    }
})

})