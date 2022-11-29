'use strict'
const signUpBtn = document.querySelector('#sign-up-btn')
const signIn = document.querySelector('#sign-in')
const signUp = document.querySelector('#sign-up');
const cover = document.querySelector('.cover')
signUpBtn.addEventListener('click',()=>{
// signIn.classList.toggle('hide');
// signUp.classList.toggle('hide');


signUp.classList.toggle('left-sign-up');

signIn.classList.toggle('right-sign-in');
cover.classList.toggle('rightcover')

// if((signIn).css('opacity')==0){
//     (signIn).css('opacity',0)
// }else{
//     (signIn).css('opacity',0)
// }
})