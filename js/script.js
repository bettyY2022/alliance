
//close and open sidebar
const button_xmark = document.querySelector('.button_xmark');
const btn = document.querySelector('.toggle');
const mySidebar = document.querySelector('.sidebar');

btn.addEventListener('click', () => {
    mySidebar.classList.add('active'); //ajouter le sidebar (add) quand on clique sur le toggle
});

button_xmark.addEventListener('click', () => {
    mySidebar.classList.remove('active'); //supprimer le sidebar (remove) quand on clique sur le boutton xmark
});

// swiper des feedbacks en utilisant le package de swiper
var swiper = new Swiper(".flex_feedbacks", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".right_navigation",
        prevEl: ".left_navigation",
      },
  });

//   counter qui affiche les années d'experiences quand on scroll

// let counter = 0; // Initialisez le compteur à 0

// // Fonction pour mettre à jour le compteur et l'afficher
// function updateCounter() {
//     document.getElementById('counter').textContent = counter;
// }

// // Fonction pour gérer le défilement de la page
// function handleScroll() {
//     // Augmentez le compteur jusqu'à 25
//     if (counter < 25) {
//         counter++;
//         updateCounter();
//     }
// }


// // Ajoutez un écouteur d'événement pour détecter le défilement de la page
// window.addEventListener('scroll', () => {
//     if(window.scrollY <= 0){
//         counter = 0;
//         handleScroll();

//     }
//     else{
//         handleScroll();
//     }
// });

// // Appelez la fonction de mise à jour initiale
// updateCounter();
(function($){
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    $('.js-tilt').tilt({
        glare: true,
        maxGlare: .5
    });
  
    $('.blog_article').on('mouseover', function(){
        $(this).find('p.style_p_blog').slideDown();
    })
    $('.blog_article').on('mouseleave', function(){
        $(this).find('p.style_p_blog').slideUp();
    })

})(jQuery)

function updateYear() {
    const yearElement = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
}

// Mettre à jour l'année au chargement de la page
updateYear();

// Mettre à jour l'année chaque seconde
setInterval(updateYear, 1000);