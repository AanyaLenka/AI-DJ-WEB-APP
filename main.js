function setup()
{
canvas = createCanvas(400,400);
canvas.center();

video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video , modelLoaded);
poseNet.on('pose' , gotPoses);
}

function draw()
{
image(video,0,0,400,400);
}

song = "";
leftWristX = "";
leftWristY = "";
rightWristX = "";
rightWristY = "";

function modelLoaded()
{
console.log("PoseNet is iniatialized");
}
function preload()
{
song = loadSound("music.mp3");
}

function play()
{
song.play();
song.setVolume(1);
song.rate(1);
}

function gotPoses(results)
{
if(results.length > 0)
{
console.log(results);
leftWristX = results[0].pose.leftWrist.x;
leftWristY = results[0].pose.leftWrist.y;
console.log("leftWristX = " + leftWristX + " leftWristY = " + leftWristY);

rightWristX = results[0].pose.rightWrist.x;
rightWristY = results[0].pose.rightWrist.y;
console.log("rightWristX = " + rightWristX + " rightWristY = " + rightWristY);
}
}

function stop()
{
song.stop();
}

function pause()
{
song.pause();
}