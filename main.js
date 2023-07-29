function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,550);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video,modelloded);
    poseNet.on('pose',gotposes);

}

function modelloded()
{
console.log('posenet is initilized');
}

function draw()
{
    background('#969A97');
 }

 function gotposes(results)
 {
    if(results.length > 0)
    {
        console.log(results);
        
    }
 }