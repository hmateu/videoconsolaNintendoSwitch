function screenOn(){
    let screen = document.getElementById("nintendoWallpaper");

    if(screen.src.match("./img/transparent.png")){
        screen.src = "../img/powerOn.gif";
    }else{
        screen.src = "../img/transparent.png";
    }
}