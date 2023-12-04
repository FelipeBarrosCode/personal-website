let arrow = document.getElementById("arrow");
let ctx = arrow.getContext("2d");

let counter =0;
ctx.beginPath();


ctx.rotate(10*Math.PI/180);
ctx.clearRect(0,0,400,400);
ctx.save()
function restart(){
    ctx.restore()
    ctx.clearRect(0,0,400,400);
    ctx.save()
    

}

function foot(){


    restart()
    ctx.moveTo(247,100);
    ctx.lineTo(325,100);
    ctx.lineTo(325,200);
    ctx.moveTo(250,100);
    ctx.lineTo(250,200);
    edit()

}


function body(){

    restart()

    ctx.lineTo(250,300);
    ctx.moveTo(325,200);
    ctx.lineTo(325,300);
    edit()

}

function head(){

    restart();

    ctx.lineTo(360,300);
    ctx.lineTo(287.5,350);
    ctx.lineTo(215,300);
    ctx.lineTo(253,300);
    edit()

    counter++
}

function edit(){
    ctx.lineWidth= 5;
    ctx.strokeStyle = "#ff8a26"
    ctx.stroke()

}


function stop(){
    restart()
    clearTimeout(interval1);
    clearTimeout(interval2);
    clearTimeout(interva3);
    clearInterval(defintive);
    arrow.style.display ="none";
}    

let defintive = setInterval(stop,2000)



let interval1 = setTimeout(foot,100);
let interval2 = setTimeout(body,200);
let interva3 = setTimeout(head,300);






