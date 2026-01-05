document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('openBtn');
    const cardWrapper = document.querySelector('.card-wrapper');
    const bgMusic = document.getElementById('bgMusic');

    openBtn.addEventListener('click', () => {
        cardWrapper.classList.add('open');
        // Play music
        bgMusic.play().catch(error => {
            console.log("Audio play failed:", error);
        });
    });
});
