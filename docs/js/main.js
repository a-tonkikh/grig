var menu = document.getElementById("menu");
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__menu');
var promotionalBtn = document.getElementById("promotional-btn");
var promotional = document.getElementById("promotional");
var closePromotional = document.getElementById("close-promotional");
var corporateBtn = document.getElementById("corporate-btn");
var corporate = document.getElementById("corporate");
var closeCorporate = document.getElementById("close-corporate");
var individualBtn = document.getElementById("individual-btn");
var individual = document.getElementById("individual");
var closeIndividual = document.getElementById("close-individual");
var developerBtn = document.getElementById("developer-btn");
var developer = document.getElementById("developer");
var closeDeveloper = document.getElementById("close-developer");

// navMain.classList.remove('main-nav--nojs');

window.onscroll = function() {
  scrollFunction()
};

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    html.classList.add('no-scroll');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    html.classList.remove('no-scroll');
  }
});

$(".questions__item").click(function() {
  if ($(this).hasClass("questions__item--closed")) {
    $(this).removeClass("questions__item--closed");
    $(this).addClass("questions__item--opened");
  } else {
    $(this).addClass("questions__item--closed");
    $(this).removeClass("questions__item--opened");
  }
});

promotionalBtn.addEventListener('click', function() {
    promotional.classList.add('pop-up--opened');
});

corporateBtn.addEventListener('click', function() {
    corporate.classList.add('pop-up--opened');
});

individualBtn.addEventListener('click', function() {
    individual.classList.add('pop-up--opened');
});

developerBtn.addEventListener('click', function() {
    developer.classList.add('pop-up--opened');
});

closeCorporate.addEventListener('click', function() {
    corporate.classList.remove('pop-up--opened');
});

closePromotional.addEventListener('click', function() {
    promotional.classList.remove('pop-up--opened');
});

closeIndividual.addEventListener('click', function() {
    individual.classList.remove('pop-up--opened');
});

closeDeveloper.addEventListener('click', function() {
    developer.classList.remove('pop-up--opened');
});
