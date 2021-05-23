window.onload = function () {
    
    let burger = document.querySelector('.burger-menu');
    let nav = document.querySelector('.user-navigation');
    burger.addEventListener('click', function () {
        nav.classList.toggle('active');
        burger.classList.toggle('active');
    });
}