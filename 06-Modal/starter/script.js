'use strict';

//all is class
//specially. when a elemrnt has a class name within space, as son class and father class.
//
// A class name can’t have spaces. When you have a space-separated string in your class attribute, you’re always giving your element several classes.
//
//yes, but the only way to call them is .son.father
//
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

//all select
const btnOpenModal = document.querySelectorAll('.show-modal');
// {
//   for (let i = 0; i < btnOpenModal.length; i++) {
//     console.log(btnOpenModal[i].textContent);
//   }
// }
