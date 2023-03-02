function alternarEstilo() {
    var titulo = document.getElementById("body");
    var btn = document.getElementById("btn");

    if (titulo.classList.contains("bodyStyle")){
        titulo.classList.remove("bodyStyle");
        btn.classList.remove("bodyStyle");
        btn.textContent = "ATIVAR MODO DARK";    
    } else {
        titulo.classList.add("bodyStyle");
        btn.classList.add("bodyStyle");
        btn.textContent = "ATIVAR MODO LIGHT";
    }
  }