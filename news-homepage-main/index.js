const btnEl= document.querySelector('.btn-mobile-nav');
const headerEL= document.querySelector('header');
const contFlexEl=document.querySelector('.container-flex');

btnEl.addEventListener('click',function(){
    headerEL.classList.toggle('nav-open');
    contFlexEl.classList.toggle('container-flex1');

});
