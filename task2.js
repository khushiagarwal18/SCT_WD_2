let startTime, updatedTime, difference, tInterval, running = false, lapCount = 0;
const display = document.getElementById('display');
const lapList = document.getElementById('lapList');

function startTimer() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
        running = true;
    }
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    display.innerHTML = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

function pauseTimer() {
    if (running) {
        clearInterval(tInterval);
        running = false;
    }
}

function resetTimer() {
    clearInterval(tInterval);
    running = false;
    display.innerHTML = '00:00:00';
    lapList.innerHTML = '';
    lapCount = 0;
}

function addLap() {
    if (running) {
        lapCount++;
        const lapTime = display.innerHTML;
        const lapItem = document.createElement('li');
        lapItem.innerText = `Lap ${lapCount}: ${lapTime}`;
        lapList.appendChild(lapItem);
    }
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('lap').addEventListener('click', addLap);
