

 const open_moreNav = document.querySelector('.fa-plus');
 const close_moreNav = document.querySelector('.fa-minus');
 const moreNav = document.querySelector('.moreNav');
 const moreNavMain = document.querySelector('.more-nav-main'); 

 moreNav.onclick = () => {
    open_moreNav.classList.toggle('d-none');
    moreNavMain.classList.toggle('d-none');
    close_moreNav.classList.toggle('d-none');
 }

 const navSub = document.querySelector('.nav-sub');

window.onmousewheel = () => {
    navSub.style.top = 0;
}

const height = navSub.scrollHeight
navSub.scrollWidth

console.log(height);