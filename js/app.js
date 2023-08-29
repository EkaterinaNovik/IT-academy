document.querySelector(".header__mobile-menu a").addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".mobile-menu__block").classList.add("open");
})
document.querySelector(".mobile-menu__close a").addEventListener("click", function (event) {
    event.preventDefault()
    document.querySelector(".mobile-menu__block").classList.remove("open")
})

// Dropdown Menu
var dropdown = document.querySelectorAll('.mobile-menu__item1');
var dropdownArray = Array.prototype.slice.call(dropdown, 0);
dropdownArray.forEach(function (el) {
    var button = el.querySelector('a[data-toggle="mobile-menu__item1_sub-menu"]'),
        menu = el.querySelector('.sub-menu');

    button.onclick = function (event) {
        if (!menu.hasClass('show')) {
            menu.classList.add('show');
            menu.classList.remove('hide');
            event.preventDefault();
        }
        else {
            menu.classList.remove('show');
            menu.classList.add('hide');
            event.preventDefault();
        }
    };
})

Element.prototype.hasClass = function (className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};

