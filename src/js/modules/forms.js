const forms = () => {
    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');
    const message = {
        loading: 'Загрузка',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    const postData = async () => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    };

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let stausMessage = document.createElement('div');
            stausMessage.classList.add('status');
            item.appendChild(stausMessage);

            const formData = new FormData(item);

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    stausMessage.textContent = message.success;
                })
                .catch(() => stausMessage.textContent = message.failure)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        stausMessage.remove();
                    }, 5000);
                });
        });
    });
};

export default forms;