

const bodyElement = document.querySelector('body');
bodyElement.style.backgroundColor = '#e9e9e9';

const newsElement = document.querySelector('.news');
newsElement.style.backgroundColor = 'white';
newsElement.style.maxWidth = '60rem';

const titleElement = document.querySelector('h1');
titleElement.className = 'news__title';
titleElement.textContent = 'Aktuální novinky';

const firstNewsElement = document.getElementById('zprava1');
firstNewsElement.classList.add('post--main');

const thirdNewsImage = document.querySelector('#zprava3 img');
thirdNewsImage.src = 'images/zprava3-novy.jpg';