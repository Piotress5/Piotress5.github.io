const menu_hover = document.querySelectorAll("li a");
const news_svg = document.querySelectorAll("svg.news-triangle");
const news_projects_desc = document.querySelectorAll("div.project-desc");
const news_projects = document.querySelectorAll("div.project-block");
let licznik = 0;
let news_wartosc = 0;

//animacja menu
menu_hover.forEach(function() {
    hover_animate();
    function hover_animate() {
        for (var i = 0, max = menu_hover.length; i < max; i++) {
            menu_hover[i].style.setProperty('--afterBackground', 'repeating-conic-gradient(from ' + 
            licznik + 'deg, #1313b4 0deg, #1313b4 25deg, transparent 25deg, transparent 125deg, #1313b4 180deg');
        }
        licznik = licznik + 1;
        if (licznik == 360) {
            licznik = 0;
        }
        setTimeout(hover_animate, 20);
    }
})

// ----------------- News -----------------
//rozwijanie opisu projektów
news_svg.forEach(function(ikona) {
    ikona.addEventListener("click", rozwin);
    function rozwin() {
        news_wartosc = ikona.getAttribute("value") - 1;
        if (news_projects[news_wartosc].classList.contains("expanded")) {
            setTimeout(zwin = () => {
                news_projects_desc[news_wartosc].style.display = "none";
            }, 650);
        } else {
            news_projects_desc[news_wartosc].style.display = "block";
        }
        news_projects[news_wartosc].classList.toggle("expanded");
    }
})