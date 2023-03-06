function switchStyle() {
    var body = document.getElementById("body");
    var btn = document.getElementById("btn");

    if (body.classList.contains("darkBackgroundStyle")){
        body.classList.remove("darkBackgroundStyle");
        btn.classList.remove("darkBackgroundStyle");
        btn.textContent = "DARK MODE";    
    } else {
        body.classList.add("darkBackgroundStyle");
        btn.classList.add("darkBackgroundStyle");
        btn.textContent = "LIGHT MODE";
    }
  }