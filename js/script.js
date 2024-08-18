document.addEventListener('mousemove', (e) => {
  const aureole = document.querySelector('.dnm__aureole');
  const container = document.querySelector('.dnm__container--circle');
  
  const rect = container.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  aureole.style.transform = `translate(${x}px, ${y}px)`;
});

// document.addEventListener('scroll', function() {
//   const circleContainer = document.querySelector('.dnm__container--circle');
//   const mainSection = document.querySelector('.section__dnm');
//   const scrollPosition = window.scrollY;
//   const maxScroll = mainSection.offsetHeight - window.innerHeight;
//   const scrollFraction = Math.min(scrollPosition / maxScroll, 1);
  
//   // Расширение шара
//   const maxCircleSize = window.innerHeight * 2; 
//   const newSize = 511 + scrollFraction * (maxCircleSize - 511);
//   circleContainer.style.width = `${newSize}px`;
//   circleContainer.style.height = `${newSize}px`;
  
//   // Эффект наплыва цвета
//   const body = document.body;
//   const newBgColor = `rgb(${219 + 36 * scrollFraction}, ${219 + 36 * scrollFraction}, ${219 + 36 * scrollFraction})`;
//   body.style.backgroundColor = newBgColor;
// });