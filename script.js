let value1 = document.getElementById("slot1").querySelector(".value");
let value2 = document.getElementById("slot2").querySelector(".value");
let value3 = document.getElementById("slot3").querySelector(".value");

let btnStart = document.getElementById("btnStart");
let btnStop = document.getElementById("btnStop");

let inpSpeed=document.getElementById('inpSpeed')


let values=[
    '😀','😁','🤩','😇','🤔','🫡','🤐'
]

function getRandomValue(){
    return values[Math.floor(Math.random()*7)]
}

let animationid;

function updateAnimation(newSpeed){
    if(animationid) clearInterval(animationid)

    animationid=setInterval(()=>{
        value1.innerText=getRandomValue()
        value2.innerText=getRandomValue()
        value3.innerText=getRandomValue()
    },1000/newSpeed)
}

inpSpeed.onchange=function(ev){

    //document.documentElement => this is the ':root' of css

    document.documentElement.style.setProperty('--speed', ev.target.value)

    updateAnimation(ev.target.value)
}

btnStart.onclick = function () {
  btnStop.disabled = false;
  btnStart.disabled = true;
  updateAnimation(inpSpeed.value);
};
btnStop.onclick = function () {
    btnStop.disabled = true;
    btnStart.disabled = false;
    clearInterval(animationid);
};