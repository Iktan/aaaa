function preload(){


}
function setup(){
    canvas = createCanvas(650,500);
    canvas.position(100,170);
    video = createCapture(VIDEO);
video.hide();

   tint_color = "";
}
function draw(){
    image(video,0,0,650,500);
    tint(tint_color);
}

function take_snapshot(){
    save('hola ahora estas en una red de trafico de organos.png');
}
function filter_tint(){
    tint_color = document.getElementById("filter_color").value;
}