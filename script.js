const sounds = [
    'open hat',
    'kick',
    'snare',
    'percussion',
    'closed hat'
]

sounds.forEach((sound) => {
    const btn = document.createElement("button");
    btn.classList.add("btn");

    btn.innerText = sound;

    btn.addEventListener("click", () => {
        document.getElementById(sound).play();
    })
    
    document.body.appendChild(btn);
});