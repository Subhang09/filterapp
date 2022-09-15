function preload(){

}

function setup(){
    Canvas=createCanvas(500, 500);
    Canvas.position(100, 270);
    video=createCapture(VIDEO);
    video.hide();
    tint_color = "";
}

function draw(){
    image(video, 0, 0, 500, 500)
    tint(tint_color);
}

function take_snapshot(){
    save("image.png");
}

function applyFilter(){
    tint_color = document.getElementById("input1").value;
}

