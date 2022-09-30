const audio = new Audio("/audio/menu-open.mp3");
audio.volume = 0.25;
const pop = new Audio("/audio/pop.mp3");
pop.volume = 0.25;
const links = document.querySelectorAll("a");

const switches = new Audio("/audio/switch-on.mp3");
const switches_off = new Audio("/audio/switch-off.mp3");
const switcher = document.querySelector("#mode");

links.forEach(link => {
  link.addEventListener("click", () => {
    audio.play();
  });
});

// toggle switch with different sounds when on or off
switcher.addEventListener("click", () => {
  // if html has data-dark-mode
  if (document.documentElement.hasAttribute("data-dark-mode")) {
    switches.volume = 0.25;
    switches.play();
  } else {
    switches_off.volume = 0.25;
    switches_off.play();
  }
} );