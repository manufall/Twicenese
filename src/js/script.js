// NavbarFixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#toTop');


    if (window.pageYOffset > fixedNav) 
    {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }

    
}
// Hamburger
const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('#nav-menu');
const close = document.querySelector('#close');
const closearea = document.querySelector('#closeArea')

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    nav.classList.add('cls');
});
close.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    nav.classList.remove('cls');
});

// DIluar Hamburger
window.addEventListener('click', function(e) {
    if(e.target == closearea)
    {
        hamburger.classList.remove('hamburger-active');
        nav.classList.remove('cls');

    }
});