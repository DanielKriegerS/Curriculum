document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('#mainNav a');
    const sections = document.querySelectorAll('section');
    const footer = document.querySelector("#footer");
    // Funções que mostram as seções pelo click nos links (display desktop)
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
            
            // Efetua a rolagem da tela para a seção destino
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth' 
            });

            footerPosition();
            
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
        footerPosition();
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

        footerPosition();
    }

    // Função para manter o rodapé na posição correta
    function footerPosition() {
        sections.forEach((section) => {
            if (section.style.display === 'block') {
            // "Manda" o footer para o rodapé da tela alterando a posição
            footer.style.position = 'relative';
            }
        })
    }

    // PARTE DA LUMINOSIDADE DA PÁGINA

    // Indexando elementos chave para mudança de luminosidade
    const brightnessSlider = document.getElementById("brightness-slider");
    const body = document.body;
    const labels = document.querySelectorAll(".sectionLabel");
    const header = document.querySelector("#header");
    const footerIcons = document.querySelectorAll(".footerIcon");
    
    // Função que adequa a luminosidade de acordo com o controle
    brightnessSlider.addEventListener("input", function () {
    // Adequações de valores para utilização
    let brightnessValueBg = this.value / 100; 
    let brightnessValueTxt = this.value / 100;

    brightnessValueBg = Math.min(1, Math.max(0, brightnessValueBg));
    brightnessValueTxt = Math.min(1, Math.max(0, brightnessValueTxt));
    
    // Criação das cores de base para mudança, aqui pode alterar as cores base
    const darkColor = "#000000";
    const lightColor = "#ffffff";

    // Chamando a função que faz o controle da cor que será adicionada aos elementos
    const interpolatedColorBg = interpolateColors(darkColor, lightColor, brightnessValueBg);
    const interpolatedColorTxt = interpolateColors(lightColor, darkColor, brightnessValueTxt);
    // Obs: para obter o efeito da mudança do texto (ou seja, o inverso da cor escura), usei a mesma função
    // porém mudei a ordem das cores base


    // Atualizando as cores
    body.style.backgroundColor = interpolatedColorBg;
    body.style.color = interpolatedColorTxt;
    sections.forEach((section) => {
        section.style.color = interpolatedColorTxt;
    });
    labels.forEach((label) => {
        label.style.color = interpolatedColorTxt;
    });
    header.style.color = interpolatedColorTxt;
    footer.style.color = interpolatedColorTxt;
    footerIcons.forEach((footerLink) => {
        footerLink.style.color = interpolatedColorTxt;
    })
});

// Função para interpolar entre duas cores
function interpolateColors(color1, color2, ratio) {
    const hex = (x) => {
        const integer = Math.round(x);
        const str = integer.toString(16);
        return str.length === 1 ? "0" + str : str;
    };

    const r1 = parseInt(color1.slice(1, 3), 16);
    const g1 = parseInt(color1.slice(3, 5), 16);
    const b1 = parseInt(color1.slice(5, 7), 16);

    const r2 = parseInt(color2.slice(1, 3), 16);
    const g2 = parseInt(color2.slice(3, 5), 16);
    const b2 = parseInt(color2.slice(5, 7), 16);

    const r = Math.floor(r1 + (r2 - r1) * ratio);
    const g = Math.floor(g1 + (g2 - g1) * ratio);
    const b = Math.floor(b1 + (b2 - b1) * ratio);

    return `#${hex(r)}${hex(g)}${hex(b)}`;
    }
});
