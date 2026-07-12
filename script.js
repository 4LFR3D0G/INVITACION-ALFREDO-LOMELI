const enterBtn = document.getElementById('enterBtn');
const cover = document.getElementById('cover');
const party = document.getElementById('party');
const music = document.getElementById('music');

enterBtn.addEventListener('click', async () => {
  try {
    music.currentTime = 74;
    music.volume = 0.82;
    await music.play();
  } catch (error) {
    music.currentTime = 74;
  }

  party.classList.add('show');

  requestAnimationFrame(() => {
    cover.classList.add('fade-out');
  });
});
