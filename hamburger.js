hamburger = document.getElementById("hamburger");
hamburger.onclick = function(){
   navBar = document.querySelector(".header-right");
   navBar.classList.toggle("active");
}
window.addEventListener('scroll' , function(){
   let header = document.getElementById('header');
   header.classList.toggle('style' , window.scrollY > 0);
});

