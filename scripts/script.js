document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('#mainNav a');
    const sections = document.querySelectorAll('section');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetSectionId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetSectionId);

            // Fecha todas as seções
            sections.forEach(function (section) {
                section.style.display = 'none';
            });

            // Abre a seção de destino
            targetSection.style.display = 'block';

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth' 
            });
        });
    });

    sections.forEach(function (section) {
        section.style.display = 'none';
    });

    // Função para fechar todas as seções, exceto a especificada
    function closeAllSectionsExcept(sectionToKeepOpen) {
        sections.forEach(function (section) {
            if (section !== sectionToKeepOpen) {
                section.style.display = 'none';
            }
        });
    }

    const aboutLabel = document.querySelector('#aboutLabel');
    const aboutSection = document.querySelector('#aboutSection');
    aboutLabel.addEventListener('click', function() {
        closeAllSectionsExcept(aboutSection);
        toggleSection(aboutSection);
    });

    const experienceLabel = document.querySelector('#experienceLabel');
    const experienceSection = document.querySelector('#experienceSection');
    experienceLabel.addEventListener('click', function() {
        closeAllSectionsExcept(experienceSection);
        toggleSection(experienceSection);
    });

    const curseLabel = document.querySelector('#curseLabel');
    const curseSection = document.querySelector('#curseSection');
    curseLabel.addEventListener('click', function() {
        closeAllSectionsExcept(curseSection);
        toggleSection(curseSection);
    });

    const obsLabel = document.querySelector('#obsLabel');
    const obsSection = document.querySelector('#obsSection');
    obsLabel.addEventListener('click', function() {
        closeAllSectionsExcept(obsSection);
        toggleSection(obsSection);
    });

    // Função para alternar a visibilidade de uma seção
    function toggleSection(section) {
        if (section.style.display === 'none') {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    }
});
