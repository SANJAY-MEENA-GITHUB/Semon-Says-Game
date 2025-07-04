let gameSeq=[];
let userSeq=[];
let btns=["red","green", "yellow","blue"];

let started=false;
let level=0;

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game is started...");
        started=true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },250);

}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);

}

let h2=document.querySelector("h2");

function levelUp(){
    userSeq=[];

    level++;
    h2.innerText=`Level ${level}`;

    //random color
    let randIdx=Math.floor(Math.random() * 3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);

    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);

} 


function checkAns(idx){
    // console.log("curr level: ",level);
    // let idx=level-1;
    
    if(userSeq[idx]==gameSeq[idx]){
        // console.log("Same value");
        if(userSeq.length==gameSeq.length){
            // levelUp();
            setTimeout(levelUp,1000);

        }

    }else{
        h2.innerHTML=`Game Over! your score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        resetFuc();
    }

}



function btnPress(){
    console.log(this);
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);

}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}


function resetFuc(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}