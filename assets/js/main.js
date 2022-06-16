"use strict"

let navBar = document.querySelector('nav')

window.addEventListener( 'scroll', () =>{

    if(window.scrollY > 60 ){
        navBar.classList.add('nav-scroll')
    }else{
        navBar.classList.remove('nav-scroll')
    }

})

/* <!-- --> */

/* <!-- --> */

let botonMenu = document.querySelector('.btn-sbm');
let ulSelected = document.querySelector('.ul-menu')

botonMenu.addEventListener('submit', ()=>{
    ulSelected.classList.add('mostrar')
})