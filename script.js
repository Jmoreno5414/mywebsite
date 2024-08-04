let music = new Audio("sounds/piano.mp3");
let gym = new Audio("sounds/weights.mp3");
let talentpic = document.getElementById("image1");
let gympic = document.getElementById("image2");
let gymbuton = document.getElementById("gymbutton")
let strengthtext = document.getElementById("strengthtex")
let gymcount = 0;


function pianomusic() {
    music.play();
    music.volume = 0.3; 
}

function playgym(event) {
    event.preventDefault(); 
    gym.play()
    gymcount ++;
    gym.volume = 0.8;
    let strength = "Strength and aura: " + gymcount;
    strengthtext.querySelector("h2").textContent = strength;
    
}

if (talentpic) {
    talentpic.addEventListener("click", pianomusic);
} 

if (gympic) {
    gympic.addEventListener("click", playgym);
} 