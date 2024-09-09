'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModals = document.querySelectorAll('.show-modal');
const openModal = function () {
  console.log('btn clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let index = 0; index < btnOpenModals.length; index++) {
  btnOpenModals[index].addEventListener('click', openModal);
}

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed",event);
  });
