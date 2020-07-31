function testWebP(callback) {
   let webP = new Image(); 
   webP.onload = webP.onerror = function () { callback(webP.height == 2); }; 
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";    
}
testWebP(function (support) {
   if (support == true) {
       document.querySelector('body').classList.add('webp'); 
   } else { 
       document.querySelector('body').classList.add('no-webp'); 
   }    
})
let 
   burger = document.querySelector('.icon-menu'),
   burgerBody = document.querySelector('.menu__body');

burger.addEventListener('click', function () {
   burger.classList.toggle('icon-menu--active')
   burgerBody.classList.toggle('menu__body--active')
})