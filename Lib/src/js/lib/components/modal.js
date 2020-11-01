import $ from '../core';

$.prototype.modal = function () {
    for (let i = 0; i < this.length; i++) {
        const target = this[i].getAttribute('data-target');
        $(this[i]).click((e) => {
            e.preventDefault();
            $(target).fadeIn(500);
            document.body.style.overflow = 'hidden';
        });
    }

    const closeElements = document.querySelectorAll('[data-close]');
    closeElements.forEach(elem => {
        $(elem).click(() => {
            $('.modal').fadeOut(500);
            document.body.style.overflow = '';
        });
    });

    $('.modal').click(e => {
        if (e.target.classList.contains('modal')) {
            $('.modal').fadeOut(500);
            document.body.style.overflow = '';
        }
    });
};
$('[data-toggle="modal"]').modal();
// Создание модального окна (объект настроек{ титульник и боди тело, кол. кнопок и настройки для кнопок})
$.prototype.createModal = function({text, btns} = {}) {
    for (let i = 0; i < this.length; i++) {
        let modal = document.createElement('div');
        modal.classList.add('modal');
        modal.setAttribute('id', this[i].getAttribute('data-target').slice(1));

        modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <button class="close" data-close>
                    <span>&times;</span>
                </button>
                <div class="modal-header">
                    <div class="modal-title">
                        Modal title #2
                    </div>
                </div>
                <div class="modal-body">
                    Lorem ipsum dolor sit
                </div>
                <div class="modal-footer">
                    <button class="btn btn-danger" data-close>Close</button>
                    <button class="btn btn-success">Save changes</button>
                </div>
            </div>
        </div>
        `;
    }
};