$(document).ready(function(){
    $('.header__burger').click(function(event){
         /*Событие клик по значку бургера и меню, добавляем класс active menu*/
        $('.header__burger,.header__menu').toggleClass('header__active-menu');
        /*Блокируем скролл при включенном меню*/
        $('body').toggleClass('lock');
    })
})