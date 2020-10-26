import $ from '../core';
// добавляет класс
$.prototype.addClass = function(...classNames){
    for (let i = 0; i < this.length; i++) {
        this[i].classList.add(...classNames);
    }

    return this;
};
// удаляет класс
$.prototype.removeClass = function(...classNames){
    for (let i = 0; i < this.length; i++) {
        this[i].classList.remove(...classNames);
    }

    return this;
};
// переключатель
$.prototype.toggleClass = function(classNames){
    for (let i = 0; i < this.length; i++) {
        this[i].classList.toggle(classNames);
    }

    return this;
};
