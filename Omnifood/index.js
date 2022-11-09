const headerElement = document.querySelector('.header');
const btnElement = document.querySelector(".mobile_nav");

btnElement.addEventListener('click', () => {
  headerElement.classList.toggle('nav-open');
})