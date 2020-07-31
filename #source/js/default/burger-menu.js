let 
   burger = document.querySelector('.icon-menu'),
   burgerBody = document.querySelector('.menu__body');

burger.addEventListener('click', function () {
   burger.classList.toggle('icon-menu--active')
   burgerBody.classList.toggle('menu__body--active')
})