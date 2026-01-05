document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('openBtn');
    const cardWrapper = document.querySelector('.card-wrapper');
    const bgMusic = document.getElementById('bgMusic');
    const musicToggle = document.getElementById('musicToggle');
    let isPlaying = false;

    function playMusic() {
        if (!isPlaying) {
            bgMusic.play().then(() => {
                isPlaying = true;
                musicToggle.classList.add('playing');
                musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
            }).catch(error => {
                console.log("Audio play failed:", error);
            });
        }
    }

    function toggleMusic() {
        if (isPlaying) {
            bgMusic.pause();
            isPlaying = false;
            musicToggle.classList.remove('playing');
            musicToggle.innerHTML = '<i class="fas fa-play"></i>';
        } else {
            playMusic();
        }
    }

    // Play on Open Card
    openBtn.addEventListener('click', () => {
        cardWrapper.classList.add('open');
        playMusic();
    });

    // Manual Toggle
    musicToggle.addEventListener('click', toggleMusic);

    // Try to play on any interaction (fallback)
    document.body.addEventListener('click', () => {
        if (!isPlaying) {
            playMusic();
        }
    }, { once: true });
});
