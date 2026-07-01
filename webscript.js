window.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');
    const displayTime = 3000;

    setTimeout(() => {
        splashScreen.classList.add('swipe-up');
    }, displayTime);
});