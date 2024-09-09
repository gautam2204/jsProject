'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const h1 = document.querySelector('h1');

// h1.addEventListener('mouseenter',(e)=>
// console.log(e.target))

const img = document.querySelector('#logo');

img.addEventListener('click', function (e) {
  console.log(e.target);
  console.log(document.documentElement.getBoundingClientRect().y);
});


let currentElm = document.querySelector(
  'body > header > nav > ul > li:nth-child(1) > a'
);
let ancestorElm = [];
console.log(currentElm);
let tempElm;

while (currentElm.parentNode && currentElm!=document.body) {
  ancestorElm.push(currentElm);
  currentElm=currentElm.parentNode;
}
console.log(ancestorElm);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;


ancestorElm.map((item,i)=>
{
  item.addEventListener('click',
function(e)
{
 console.log('Target = ',e.target);
 console.log('Current Target =',e.currentTarget);
  this.style.backgroundColor=randomColor();
})
})

const h1Elm = document.querySelector('h1');
console.log("=========");
// console.log(h1Elm.childNodes);
const getChildDetails= function(nodeElm)
{
  console.log(nodeElm.text);
}

Array.from(h1Elm.childNodes).forEach(getChildDetails)
console.log("=========");
console.log(h1Elm.children);
console.log("=========");
// console.log(h1Elm.childNodes);
