const audio = new Audio('/audio/menu-open.mp3');
const links = document.querySelectorAll('a');

links.forEach(link => {
  link.addEventListener('click', () => {
    audio.volume = 0.4;
    audio.play();
  });
});

// Toggle switch with different sounds when on or off
// Element selector
const switcher = document.querySelector('#mode');
// audio files
const switch_on = new Audio('/audio/switch-on.mp3');
const switches_off = new Audio('/audio/switch-off.mp3');
// check if switch is on or off
switcher.addEventListener('click', () => {
  // if html has data-dark-mode
  if (document.documentElement.hasAttribute('data-dark-mode')) {
    switch_on.volume = 0.5;
    switch_on.play();
  } else {
    switches_off.volume = 0.5;
    switches_off.play();
  }
} );