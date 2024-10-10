const menu_hover = document.querySelectorAll("li a");
const main_start_block = document.querySelector("div.main-header-block");
const main_start_header = document.querySelector("div.main-header-block h1");
const news_svg = document.querySelectorAll("svg.news-triangle");
const news_projects_desc = document.querySelectorAll("div.project-desc");
const news_projects = document.querySelectorAll("div.project-block");
const projects_objects = document.querySelectorAll("div.project-object");
const projects_list = document.querySelector("div.project-list");
const body = document.querySelector("body");
const panels = document.querySelectorAll("div.subcategory");
let licznik = 0;
let news_wartosc = 0;
let projects_delay = 0;
let projects_timer = 0;
let projects_interval = null;

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

// ----------------- Mainpage -----------------
//animacja wstepna
if (main_start_block) {
    body.onload = function entry_animation() {
        setTimeout(() => {
            main_start_block.style.opacity = "1";
            main_start_block.style.setProperty('--welcome_light1', 'left_light');
            main_start_block.style.setProperty('--welcome_light2', 'right_light');
            main_start_block.style.setProperty('--repeating', '1');
            setTimeout(() => {
                main_start_block.style.setProperty('--welcome_light1', 'flickering');
                main_start_block.style.setProperty('--welcome_light2', 'flickering');
                main_start_block.style.setProperty('--duration1', '2s');
                main_start_block.style.setProperty('--repeating1', 'infinite');
                setTimeout(() => {
                    main_start_header.style.opacity = "1";
                    main_start_header.style.setProperty('--repeating2', '1');
                    main_start_header.style.setProperty('--repeating3', '1');
                    setTimeout(() => {
                        main_start_header.style.setProperty('--backlight', 'backflickering');
                        main_start_header.style.setProperty('--repeating3', 'infinite');
                        main_start_header.style.setProperty('--duration2', '1s');
                        main_start_header.style.setProperty('--header', 'skewing')
                        main_start_header.style.setProperty('--repeating2', 'infinite');
                    }, 1900);
                }, 100);
            }, 3800);
        }, 100);
    }
}
    //animacja paneli
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("slide");
            entry.target.classList.remove("slide_right");
        }
    });
});
panels.forEach((el) => observer.observe(el));

// ----------------- News -----------------
//rozwijanie opisu projektow
news_projects.forEach(function(opis) {
    opis.addEventListener("click", rozwin);
    function rozwin() {
        news_wartosc = opis.getAttribute("value") - 1;
        if (this.classList.contains("expanded")) {
            this.style.maxHeight = null;
            news_svg[news_wartosc].classList.toggle("rotated");
        } else {
            this.style.maxHeight = this.scrollHeight + 5 + "px";
            news_svg[news_wartosc].classList.toggle("rotated");
        }
        this.classList.toggle("expanded");
    }
})

// ----------------- Projects -----------------
//opoznienie dla wczytywanych projektow
for (var i = 0, max = projects_objects.length; i < max; i++) {
    projects_objects[i].style.animationDelay = i * 0.3 + "s";
}

if (projects_objects.length > 0) {
    projects_interval = setInterval(widok_projekty = () => {
        projects_objects[projects_timer].style.opacity = "1";
        projects_timer++;
        if (projects_timer == projects_objects.length) {
            clearInterval(projects_interval);
        }
    }, 300);

    setTimeout(widok_delay = () => {
        projects_interval;
    }, 1100);

    projects_delay = projects_objects.length * 0.3 + 0.5;
    projects_list.style.animationDelay = projects_delay + "s";
    setTimeout(widok_lista = () => {
        projects_list.style.opacity = "1";
    }, projects_delay * 1000 + 1100);
}
