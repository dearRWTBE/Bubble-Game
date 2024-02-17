
var number = '';
var hitN = '';
var timeSet = 60;
var score = 0;



function createCircle(){
    var circleG = '';
    for(var i=1; i<=119; i++){
        number = Math.floor(Math.random()*10);
        circleG += `<div class="circle">${number}</div>`;
    }
    document.querySelector('#parentB').innerHTML=circleG;
}

function timer(){

    var timerInt = setInterval(() => {
        if(timeSet >0){
        timeSet--;
        document.querySelector('#timerBox').innerHTML=timeSet;
        }
        else{
          clearInterval(timerInt);
          document.getElementById('parentB').innerHTML=`<h1>Game Over</h1>`;
        }
        
    }, 1000);

}
function hitCase(){
   hitN = Math.floor(Math.random()*10);
   document.querySelector("#hitNum").innerHTML = hitN;
}

function scoreUp(){
   score+=10;
   document.querySelector("#scorePP").innerHTML=score;
}

document.getElementById('parentB').addEventListener('click', function (details){
    magicNum = Number(details.target.innerHTML);
    if (hitN===magicNum) {
        scoreUp();
        hitCase();
        createCircle()     
    }  

})
hitCase();
timer();
createCircle();


