document.addEventListener('DOMContentLoaded',function(){
const menuT=document.querySelector(".menu-toggle");
const navlinks=document.querySelector(".nav-links")

menuT.addEventListener('click',function(){
    navlinks.classList.toggle('active');//used for ctive the menu at small screen.

    const icon=menuT.querySelector('i');

    icon.classList.toggle('fa-bars');//1st click
    icon.classList.toggle('fa-x');//for close the menu bar
})
//<i class="fa-solid fa-x"></i>
});