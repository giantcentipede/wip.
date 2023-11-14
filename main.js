songA="";
songB="";
X=0;
Y=0;
leftWristX=0;
rightWristX=0;
leftWristY=0;
rightWristY=0;



function preload() {
songA = loadSound("taco.mp3");
songB = loadSound("Hailing Taquitos.mp3");

}

function setup() {
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotposes);
   

}
 function modelloaded() {
        console.log("modelloaded");
    }
function draw() {
    image(video,0,0,600,500);
}

function gotposes() {
if (results.length > 0) {
leftWristX= results[0].pose.leftWrist.X;
rightWristY= results[0].pose.rightWrist.Y;
leftWristY= results[0].pose.leftWrist.X;
rightWristX= results[0].pose.rightWrist.X;
}
}