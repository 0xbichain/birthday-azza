document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('openBtn');
    const cardWrapper = document.querySelector('.card-wrapper');

    openBtn.addEventListener('click', () => {
        cardWrapper.classList.add('open');
    });
});
