const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPause");
const progressFill = document.getElementById("progressFill");
const currentTimeEl = document.getElementById("currentTime");

let playing = false;

playPauseBtn.addEventListener("click", () => {
  if (playing) {
    audio.pause();
    playPauseBtn.innerHTML = `<i class="fas fa-play"></i>`;
  } else {
    audio.play();
    playPauseBtn.innerHTML = `<i class="fas fa-pause"></i>`;
  }
  playing = !playing;
});

audio.addEventListener("timeupdate", () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressFill.style.width = `${progress}%`;

  const mins = Math.floor(audio.currentTime / 60);
  const secs = Math.floor(audio.currentTime % 60)
    .toString()
    .padStart(2, "0");
  currentTimeEl.textContent = `${mins}:${secs}`;
});
