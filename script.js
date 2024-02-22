const menu_hover = document.querySelectorAll("li a");
let licznik = 0;

//animacja menu
menu_hover.forEach(function() {
    hover_animate();
    function hover_animate() {
        for (var i = 0, max = menu_hover.length; i < max; i++) {
            menu_hover[i].style.setProperty('--afterBackground', 'repeating-conic-gradient(from ' + 
            licznik + 'deg, red 0deg, red 25deg, transparent 25deg, transparent 125deg, red 180deg');
        }
        licznik = licznik + 1;
        if (licznik == 360) {
            licznik = 0;
        }
        setTimeout(hover_animate, 20);
    }
})
