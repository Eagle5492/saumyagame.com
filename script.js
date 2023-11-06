var timer=60;
var score=0;
var hitrn=0;

function increseScore()
{
    score += 10;
    document.querySelector("#scoreval").textContent=score;
}

function getNewHit()
{
    hitrn= Math.floor(Math.random()*10);
    document.querySelector("#hitvar").textContent=hitrn;
}
function makeBubble(){
    var cullter="";

for(var i=1;i<=119;i++)
{
    var rn=Math.floor(Math.random()*10)
    cullter +=`<div class="bubble">${rn}</div>`;

}

document.querySelector("#pbtm").innerHTML=cullter;
}

function runTimer()
{
    var timerint = setInterval(function () {
        if(timer>0)
        {
            timer--;
            document.querySelector("#timerval").textContent=timer;
            
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>`
        }
    }, 1000);
}

document.querySelector("#pbtm").addEventListener("click",function(dets)
{
    // alert("char raha hu bhaiii me.....");
    // console.log(dets.target.textContent);
    // console.log(Number(dets.target.textContent));

    var clicknum=Number(dets.target.textContent);
    if(clicknum === hitrn)
    {
        increseScore();
        makeBubble();
        getNewHit();
    }
})


runTimer();
makeBubble();
getNewHit();
// increseScore();