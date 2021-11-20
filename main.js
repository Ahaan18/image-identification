imag1e = "";
status1 = "";
objects = [""];
x = "";
function preload(){
    imag1e = loadImage('dog_cat.jpg');
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    x = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("cocossd has loaded!");
    status1 = true;
    x.detect(imag1e, detectedObject);
}
function detectedObject(error, result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        objects = result;
    }
}
function draw(){
    image(imag1e, 0, 0, 640, 420);
    if(status1 != ""){
        for(var i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status: Object Detected";
            fill('orange');
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
    noFill();
    stroke('orange');
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
}
}