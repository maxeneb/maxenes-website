// utils/playClickSound.ts
export const playClickSound = (isMuted: boolean = false) => {
    if (isMuted) return;
    const audio = new Audio('/sounds/click.mp3');
    audio.play();
  };

export const playClickSoundLow = (isMuted: boolean = false) => {
  if (isMuted) return;
  const audio = new Audio('/sounds/click-low.mp3');
  audio.play();
}