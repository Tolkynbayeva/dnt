document.addEventListener('mousemove', (e) => {
  const aureole = document.querySelector('.dnm__aureole');
  const container = document.querySelector('.dnm__container--circle');
  
  const rect = container.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  aureole.style.transform = `translate(${x}px, ${y}px)`;
});

const words = ["выдающимися", "вдохновляющими", "запоминающимися"];
let wordIndex = 0;
let charIndex = 0;
let currentWord = '';
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetweenWords = 1000;

function type() {
  const typewriterSpan = document.querySelector('.dnm__text-typewriter');
  
  if (isDeleting) {
    currentWord = words[wordIndex].substring(0, charIndex--);
  } else {
    currentWord = words[wordIndex].substring(0, charIndex++);
  }

  typewriterSpan.textContent = currentWord;

  if (!isDeleting && charIndex === words[wordIndex].length) {
    setTimeout(() => {
      isDeleting = true;
    }, delayBetweenWords);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
}

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(type, delayBetweenWords);
});


window.addEventListener('scroll', function() {
  const dnmCircle = document.querySelector('.dnm__circle');
  const headerNav = document.querySelector('.header__nav');
  const body = document.body;
  const sectionOffering = document.querySelector('.section__offerings');
  

  if (window.scrollY > window.innerHeight / 4) {
    dnmCircle.classList.add('expand');
    body.classList.add('dark-mode');
    headerNav.classList.add('dark-mode');
  }
  

  if (window.scrollY > window.innerHeight / 2) {
    dnmCircle.classList.add('fade');
    sectionOffering.classList.add('visible');
  } else {
    dnmCircle.classList.remove('fade');
    sectionOffering.classList.remove('visible');
  }
  

  if (window.scrollY <= window.innerHeight / 4) {
    dnmCircle.classList.remove('expand');
    body.classList.remove('dark-mode');
    headerNav.classList.remove('dark-mode');
  }
});

const headerNav = document.querySelector('.header__nav');
headerNav.classList.add('dark-mode');
headerNav.classList.remove('dark-mode');