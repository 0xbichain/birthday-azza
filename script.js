document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('openBtn');
    const cardWrapper = document.querySelector('.card-wrapper');
    const bgMusic = document.getElementById('bgMusic');

    // Function to play music
    const playAudio = () => {
        bgMusic.play().then(() => {
            // Remove listeners once played
            document.removeEventListener('click', playAudio);
            document.removeEventListener('touchstart', playAudio);
            document.removeEventListener('scroll', playAudio);
            document.removeEventListener('mousemove', playAudio);
        }).catch(err => {
            console.log("Autoplay prevented, waiting for interaction.");
        });
    };

    // Try to play immediately
    playAudio();

    // Add listeners for any interaction to trigger play
    document.addEventListener('click', playAudio);
    document.addEventListener('touchstart', playAudio);
    document.addEventListener('scroll', playAudio);
    document.addEventListener('mousemove', playAudio);

    openBtn.addEventListener('click', () => {
        cardWrapper.classList.add('open');
        playAudio(); // Ensure it plays on button click too
    });
});
