import { getResource } from '../services/requests';

const showMoreStyles = (trigger, style) => {
    const cards = document.querySelectorAll(style),
        btn = document.querySelector(trigger);

    //cards.forEach(card => {
    //    card.classList.add('animated', 'fadeInUp');
    //});

    //btn.addEventListener('click', () => {
    //    cards.forEach(card => {
    //        card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
    //        card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    //    });
    //    //btn.style.display = 'none';
    //    btn.remove();
    //});

    btn.addEventListener('click', () => {
        getResource('http://localhost:3000/styles')
            .then(res => console.log(res));
    });

    function createCards(response) {
        response.forEach(item => {
            let card = document.createElement('div');

            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

            card.innerHTML = `

                `
        });
    };

    //<div class="hidden-lg hidden-md hidden-sm hidden-xs styles-2">
    //    <div class=styles-block>
    //        <img src=assets /img/styles-8.jpg alt>
				//		<h4>Шарж</h4>
    //        <a href="#">Подробнее</a>
    //    </div>
    //</div>

};

export default showMoreStyles;