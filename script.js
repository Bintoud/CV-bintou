//navbar
let lastScrollTop = 0;
navbar = document.getElementById('navbar'); // va chercher l'élement qui s'appelle navbar ds notre html / navbar équivalent de document.getElementById('navbar')

window.addEventListener('scrool', function () {
    const scrollTop = window.pageTOffset ||
        this.document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) { // si scrollTop est supérieur à lastScrollTop(la dernier fois qu'on a scroller qu'on est descendu)
        navbar.style.top = "-50px"; // alors la navbar elle disparait/pour la faire disparaitre on agit sur son style(en top elle remonte de -50px) 
    } else { // sinon
        navbar.style.top = "0"; // donc si c l'inverse le style est == à 0
    }
    lastScrollTop = scrollTop; // 
});

//sroller= dérouler défiler le fait que ça apparait(monte) ou disparait(descend)de l'écran
//scrollTop mesure pris sur la page qui décide si on monte ou descends
//Une fois qu'on a fini de scroller /scrollTop(ligne 6) va donner sa valeur à lastScrollTop(ligne 15) à chaque relance de formule.


// typed
var typed = new Typed('.typed', {
    strings: [" Bonjour après 10 ans de restauration j'ai décidée  de faire une reconversion professionnelle dans le domaine du numérique. Plus précisément les métiers du développement web.",
        "J'ai suivi une formation de 4 Mois avec Social Builder en partenariat avec Konexio, dans le développement web et web mobile j'ai appris les bases des langages HTML, CSS , Javascript et son Framework React.",
        "Curieuse, créative, envie d'apprendre et d'en savoir toujours plus j'ai décidé de me lancer à fond dans l'apprentissage du code depuis plus de 3 mois je me forme en autodidacte, pour moi la programmation c'est une nouvelle aventure dans lequel je me découvre un épanouissement."
    ],
    typeSpeed: 20,
});

// on crée une new var Typed (qui nous ramène à la bibliothèque typed.minjs)
// '.typed'==> relie la class <span class="typed"></span> dans mon html c'est qui vas faire le lien entre le html et le js
// dans le strings à chaque virgule ça repart en arrière
// loop: true il continue loop:false il s'arrete au dernier mot.
//typeSpeed:va moin vite et backSpeed sa repart très vite
//var typed = new Typed('.typed', {
//   strings: ['coucou', 'salut', 'salam'],
//    typeSpeed: 20,
//    backSpeed: 0,
//   smartBackspace: true, // this is a default
//    loop: false
//});

// COMPTEUR LIVE
let compteur = 0;

// fonction qui demarre l'évenement du scroll 
$(window).scroll(function () {

    // à chaqque fois qu'on appel top ça correspondra à tout ce que l'on va taper 
    const top = $('.counter').offset().top - window.innerHeight;

    //double condition
    //si compteur est égale à 0, et est supérieur à top j'appelle la class counter-value
    //counter-value= indication des chiffres
    if (compteur == 0 && $(window).scrollTop() > top) {
        $('.counter-value').each(function () {
            let $this = $(this), // (this) terme qui renvoie à l'obj de la fonction
                //countTo(vaut 31)jusqu'ou on va compter data-count va chercher l'élem dans le html
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
                //animation de countNum: countTo
            }).animate({
                countNum: countTo
            }, {
                // durée 10sec
                duration: 10000,
                // méthode dont il arrive sur l'écran
                easing: 'swing',
                //étape qui fait qu'il va d'1 chiffre à un autre / méthode Math.floor qui fait que ça va compter petit à petit(1234....) 
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                }
            });
        });
        // à la fin de la fonction le compteur vaut 1 pour ne pas rappeler la fonction sinon ça vas recommencer à chaque fois
        compteur = 1;
    }
});

// let compteur est initialiser à 0
// if = si le compteur est à 0 , on lance le compteur 
// && = scroll 
// lorsqu'on arrive au début de l'élément et si le count est à zéro alors on lance le compteur
// si on arrive au début de l'élem et que le count est passer à 1 ce qui veut dire que le count est à 1
// data-count (ds le html) donne sa valeur à countTo ligne 58 
// le but de la function est de monter avec Math.floor/ countNum doit monter jusqu'à countTo c son but

// AOS pour l'initialiser
AOS.init();