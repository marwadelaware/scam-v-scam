const screen1 = document.getElementById('screen1');
const screen2 = document.getElementById('screen2');

function nextScreen(nextId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.style.display = 'none');

    const nextScreen = document.getElementById(nextId);
    if (nextScreen) {
        nextScreen.style.display ='block';
    }
}