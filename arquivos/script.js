'use strict';

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }
const goTopBtn = document.querySelector("[data-go-top]");
const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navToggleBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}


//header sticky (fixa o cabeçalho em cima sempre que scrollar para baixo)
const header = document.querySelector("[data-header]");
let lastScrollPosition = 0;

window.addEventListener("scroll", function () { //sempre que o mouse "scrollar", esse evento acontece

  let scrollPosition = window.scrollY; //a variável pega a posição atual do "y da tela"

  if (scrollPosition > lastScrollPosition) header.classList.remove("active");
  else header.classList.add("active");

  lastScrollPosition = scrollPosition <= 0 ? 0 : scrollPosition; //a posição atual passa a ser a última. Se for <= 0, é setada em 0

});

function reproduzirPodcast(musica, progressBar, play, pause) {

  const audio = document.getElementById(musica);
  const pauseButton = document.getElementById(pause);
  const playButton = document.getElementById(play);

  if (audio.paused) {
    audio.play();
    pauseButton.style.display = 'block';
    playButton.style.display = 'none';
  } else {
    audio.pause();
    pauseButton.style.display = 'none';
    playButton.style.display = 'block';
  }

  const bar = document.getElementById(progressBar);

  audio.addEventListener('timeupdate', function () {
    var currentTime = audio.currentTime;
    var duration = audio.duration;
    var progress = (currentTime / duration) * 100;
    bar.value = progress;
  });
}

//vai para o topo
window.addEventListener("scroll", function () {
  window.scrollY >= 200 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");
});