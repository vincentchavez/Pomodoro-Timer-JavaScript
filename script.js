let time = 25 * 60; // Initial time in seconds (25 minutes)
let timerInterval;

function startTimer() {
    if (!timerInterval) {
        timerInterval = setInterval(updateTimer, 1000);
        document.getElementById('start-btn').innerText = 'Pause';
    } else {
        clearInterval(timerInterval);
        timerInterval = null;
        document.getElementById('start-btn').innerText = 'Resume';
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    time = 25 * 60;
    document.getElementById('time-display').innerText = formatTime(time);
    document.getElementById('start-btn').innerText = 'Start';
}

function updateTimer() {
    if (time > 0) {
        time--;
        document.getElementById('time-display').innerText = formatTime(time);
    } else {
        clearInterval(timerInterval);
        timerInterval = null;
        // Time's up, you can add notification or alert here
    }
}

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
