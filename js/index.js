// const hour = new Date().getHours();
// alert(hour);

const sky = document.getElementById('sky-parallax');
const mountainFar = document.getElementById('mountain-far-parallax');
const mountainBetween = document.getElementById('mountain-between-parallax');
const mountainClose = document.getElementById('mountain-close-parallax');
const trees = document.getElementById('trees-parallax');
const land = document.getElementById('land-parallax');
const character = document.getElementById('character-parallax');
const bush = document.getElementById('bush-parallax');
const introText = document.getElementById('intro-text');
const items = document.querySelectorAll('.show-up');
const landingPage = document.getElementById('landing-page');
const landingPagePrevBt = document.getElementById('landing-page-prev');
const landingPageNextBt = document.getElementById('landing-page-next');
const headOrTails = document.getElementById('head-or-tails');
const headOrTailsPrevBt = document.getElementById('head-or-tails-prev');
const headOrTailsNextBt = document.getElementById('head-or-tails-next');
const nindooRpg = document.getElementById('nindoo-rpg');
const nindooRpgPrevBt = document.getElementById('nindoo-rpg-prev');
const nindooRpgNextBt = document.getElementById('nindoo-rpg-next');
const myorho = document.getElementById('myorho');
const myorhoPrevBt = document.getElementById('myorho-prev');
const myorhoNextBt = document.getElementById('myorho-next');
const intro = document.getElementById('intro');
const about = document.getElementById('about');
const menuIntroTxt = document.getElementById('menu-intro');
const mainMenuColor = document.querySelectorAll('.main-menu-bg-color');


window.addEventListener("scroll", function() {
    var value = window.scrollY;
    mountainFar.style.top = value * 0.08 + 'px';
    mountainBetween.style.top = value * 0.15 + 'px';
    mountainClose.style.top = value * 0.19 + 'px';
    trees.style.top = value * 0.3 + 'px';
    introText.style.top = value * 0.8 + 'px';
})

const displaying = function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('inview'); 
        } else {
            entry.target.classList.remove('inview'); 
        }
    });
}

const io = new IntersectionObserver(displaying);
for (let i = 0; i < items.length; i++) {
    io.observe(items[i]);
}


const optionsBlack = {
    rootMargin: '0px',
    threshold: 0.25,
  };

const menuIntroBlack = function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            menuIntroTxt.style.color = '#3B5656';
            menuIntroTxt.style.transition = 'color 0.3s';
            for (let i = 0; i <  mainMenuColor.length; i++) {
                mainMenuColor[i].style.background = 'linear-gradient(to top, #3B5656, transparent)';
            }
        }
    });
}

const io2 = new IntersectionObserver(menuIntroBlack, optionsBlack);
io2.observe(intro);


const optionsWhite = {
    rootMargin: '0px',
    threshold: 0.75,
  };

const menuIntroWhite = function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            menuIntroTxt.style.color = 'white';
            menuIntroTxt.style.transition = 'color 0.3s';
            for (let i = 0; i <  mainMenuColor.length; i++) {
                mainMenuColor[i].style.background = 'linear-gradient(to top, #ffffff, transparent)';
            }
        }
    });
}

const io3 = new IntersectionObserver(menuIntroWhite, optionsWhite);
io3.observe(about);


landingPagePrevBt.addEventListener("click", () => {
    landingPage.style.display = 'none';
    myorho.style.display = 'flex';
})

landingPageNextBt.addEventListener("click", () => {
    landingPage.style.display = 'none';
    headOrTails.style.display = 'flex';
})

headOrTailsPrevBt.addEventListener("click", () => {
    headOrTails.style.display = 'none';
    landingPage.style.display = 'flex';
})

headOrTailsNextBt.addEventListener("click", () => {
    headOrTails.style.display = 'none';
    nindooRpg.style.display = 'flex';
})

nindooRpgPrevBt.addEventListener("click", () => {
    nindooRpg.style.display = 'none';
    headOrTails.style.display = 'flex';
})

nindooRpgNextBt.addEventListener("click", () => {
    nindooRpg.style.display = 'none';
    myorho.style.display = 'flex';
})

myorhoPrevBt.addEventListener("click", () => {
    myorho.style.display = 'none';
    nindooRpg.style.display = 'flex';
})

myorhoNextBt.addEventListener("click", () => {
    myorho.style.display = 'none';
    landingPage.style.display = 'flex';
})
