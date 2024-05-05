/* global YT */
let player;

/* PLAY */

const playButton = document.querySelector("#play-video");
playButton.addEventListener("click", playVideo);

function removeClasses() {
    const wrapper = document.querySelector(".cover_play");
    const container = document.querySelector(".player_container");
    const closeButton = document.querySelector("#close-button");
    wrapper.classList.remove("d-none");
    container.classList.remove("d-none");
    closeButton.classList.remove("d-none");
}

function playVideo() {
    const videoId = playButton.getAttribute("data-video-id");
    removeClasses();

    if (player) {
        player.destroy();
    }

    player = new YT.Player("player", {
        videoId: videoId,
        origin: "https://caefisica.com/",
        width: 900,
        height: 506,
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        },
        playerVars: {
            autoplay: 1,
            controls: 1,
            showinfo: 0,
            modestbranding: 1,
            rel: 0,
            fs: 0,
            iv_load_policy: 3
        }
    });
    player.h.attributes.sandbox.value =
        "allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-presentation";
    document.querySelector("#player").style.display = "block";
}

function onPlayerReady() {
    // The player is ready
}

function onPlayerStateChange() {
    // The player's state has changed
}

/* CLOSE */

const closeButton = document.querySelector("#close-button");
closeButton.addEventListener("click", closeVideo);

function closeVideo() {
    player.stopVideo();
    const container = document.querySelector(".player_container");
    const wrapper = document.querySelector(".cover_play");
    container.classList.add("d-none");
    wrapper.classList.add("d-none");
}
