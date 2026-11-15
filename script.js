document.documentElement.classList.add('js');

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
