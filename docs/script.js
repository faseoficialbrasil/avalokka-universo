document.addEventListener('DOMContentLoaded', () => {
  const audioAmbient = document.getElementById('audioAmbient');
  const toggleBtn = document.getElementById('audioToggle');
  let isPlaying = false;

  if (audioAmbient && toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      if (isPlaying) {
        audioAmbient.pause();
        toggleBtn.textContent = '🔈 Ligar Som';
      } else {
        audioAmbient.play();
        toggleBtn.textContent = '🔇 Desligar Som';
      }
      isPlaying = !isPlaying;
    });
  }
});
