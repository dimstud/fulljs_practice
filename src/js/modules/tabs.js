'use strict';

const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
<<<<<<< HEAD
        countent = document.querySelector(contentSelector);

    function hideTabContent() {

    }

    function showTabContent() {

    }
=======
        content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });

        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {
        content[i].style.display = 'block';
        tab[i].classList.remove(activeClass);
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains(tabSelector.replace(/\./, ""))) {
            
        }
    })
>>>>>>> 8205543883c13c236ce3647f8f1403102f60d2dd
};

export default tabs;