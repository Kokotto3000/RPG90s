const STAGE= document.getElementById("stage");
STAGE.width= 750;
STAGE.height= 625;

const ctx= STAGE.getContext("2d");

// ctx.fillStyle= "#E44E49";
// ctx.fillRect(0, 0, STAGE.width, STAGE.height);

// ctx.fillStyle= "#fff";
// ctx.fillRect(200, 200, 50, 50);

// image de fond
const image1= new Image();
image1.src= './img/background.png';
image1.onload= ()=> {
    ctx.drawImage(image1, 0, 0, 750, 825);
}

// image du heros
const image2= new Image();
image2.src= './img/sprites/heros1.png';
image2.onload= ()=> {
    ctx.drawImage(image2, 32, 0, 30, 30, 150, 150, 48, 48);
    // CanvasDrawImage.drawImage(image, x de départ dans l'image, y de départ, largeur original, hauteur original, position x dans le canvas, position y, largeur finale, hauteur finale): void
}

const hero= {
    x: 40,
    y: 40
};

// methode pour réagir aux touches du clavier
function handleKeyboardInput(e){
    if(e.code === "Enter") console.log("Enter");
    else if(e.code === "Space") console.log("Space");
    else if(e.code === "ArrowUp") hero.y -= 25;
    else if(e.code === "ArrowDown") hero.y+= 25;
    else if(e.code === "ArrowLeft") hero.x -= 25;
    else if(e.code === "ArrowRight") hero.x += 25;
}

window.addEventListener('keydown', handleKeyboardInput);

// méthode pour dessiner les anims
function loop(){
    // décor
    ctx.drawImage(image1, 0, 0, 750, 825);

    // héros
    ctx.drawImage(image2, 32, 0, 30, 30, hero.x, hero.y, 48, 48);

    // uniquement si request
    //loop();
}

//pour le rafraîchissement setInterval ou requestAnimationFrame
setInterval(loop, 1000);