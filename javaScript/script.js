

const BTN__burger = document.querySelector('.btn__burger');
const MENU = document.querySelector('.menu__body');
const HTML = document.querySelector('html');


BTN__burger.onclick = () => {
  MENU.classList.toggle('_activeMenu');
  HTML.classList.toggle('hidden');
  BTN__burger.classList.toggle('btn__burger_active');
}






const TitleSpoller = document.querySelectorAll('.menuFooter__title');
//const BodySpoller = document.querySelectorAll('.menuFooter');

TitleSpoller.forEach(item => {
  item.addEventListener('click', spollerOpen);
});



function spollerOpen(e) {
  // this.closest('.menuFooter').classList.toggle('active');
  console.log(this.nextElementSibling);
  this.nextElementSibling.classList.toggle('active');
  console.log(this);
  /*console.log(this.closest('.menuFooter__wrepper'));*/
}


