let boxes=document.querySelectorAll(".item")
let you_win=document.getElementById("u-win")
let plyAgn=document.getElementById("play-again")
let modal=document.getElementById("modal")

//state
let alterValue=true
let val=""
let count=0
let win=false
let items=[]


let alterValueFunc=()=>{
    if(alterValue){
        val="O"
    }else{
        val="X"
    }
    alterValue=!alterValue
    return val
}

//play again functionality
let playAgain=()=>{
    
    val=""
    count=0
    win=false
    
    for (let i = 0; i < 9; i++) {
        boxes.item(i).innerText=val
    }
    
    modal.classList.remove("show")
}

//check if any player wins the game
let checkWinning=()=>{
    
    for (let i = 0; i < 9; i++) {
        items[i]=boxes.item(i).innerText
    }

    //main game logic
    if(
    ((((items[0]===items[1])&&(items[0].length==1)) && (items[1]===items[2]&&(items[1].length==1)))||
    (((items[3]===items[4])&&(items[3].length==1)) && ((items[4]===items[5])&&(items[4].length==1)))||
    (((items[6]===items[7])&&(items[6].length==1)) && ((items[7]===items[8])&&(items[7].length==1)))||
    (((items[0]===items[3])&&(items[0].length==1)) && ((items[3]===items[6])&&(items[3].length==1)))||
    (((items[1]===items[4])&&(items[1].length==1)) && ((items[4]===items[7])&&(items[4].length==1)))||
    (((items[2]===items[5])&&(items[2].length==1)) && ((items[5]===items[8])&&(items[5].length==1)))||
    (((items[0]===items[4])&&(items[0].length==1)) && ((items[4]===items[8])&&(items[5].length==1)))||
    (((items[6]===items[4])&&(items[6].length==1)) && ((items[4]===items[2])&&(items[2].length==1))))&&
    (win!=true)
    ){
        you_win.src="you-win.gif"
        win=true
        for (let i = 0; i < 9; i++) {
            boxes.item(i).innerText=val
        }
        modal.classList.add("show")
    }
}

boxes.forEach(box=>{
        box.addEventListener("click",()=>{
            count++
            box.innerHTML=alterValueFunc()
            checkWinning()
            if((count==9)&&(win!=true)){
                let urlChange=()=>{
                    you_win.src="nice-try.gif"

                    return true
                }
                if(urlChange()){
                    modal.classList.add("show")
                }
            }
    })
})

plyAgn.addEventListener("click", playAgain)