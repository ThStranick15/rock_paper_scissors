const play = document.getElementById("play-button")
const winsEl = document.getElementById("wins")
const tiesEl = document.getElementById("ties")
const lossesEl = document.getElementById("losses")
let wins = 0
let ties = 0
let losses = 0

play.addEventListener('click', playGame)

function playGame(){
    let answer = prompt('Enter R P or S')
    const rand = Math.floor(Math.random()*3)
    let computer = ''

    while(!answer.includes('R') && !answer.includes('P') && !answer.includes('S')){
        confirm("Please select a valid option (R, P, S)")
        answer = prompt('Enter R P or S')
    }

    if(rand == 1){
        computer = 'R'
    }
    else if(rand == 2){
        computer = 'P'
    }
    else{
        computer = "S"
    }

    if((answer == 'R' && computer == 'S') || (answer == 'P' && computer == 'R') || (answer == 'S' && computer == 'P')){
        wins++ 
        alert(`You win! 
        The computer chose ${computer}
        Wins: ${wins}
        Ties: ${ties}
        Losses: ${losses}`)
        
    }
    else if((answer == 'R' && computer == 'R') || (answer == 'P' && computer == 'P') || (answer == 'S' && computer == 'S')){
        ties++ 
        alert(`You tied. 
        The computer chose ${computer}
        Wins: ${wins}
        Ties: ${ties}
        Losses: ${losses}`)
        
    }
    else{
        losses++
        alert(`You lose. 
        The computer chose ${computer}
        Wins: ${wins}
        Ties: ${ties}
        Losses: ${losses}`)
        
    }

    updateTable()
}

function updateTable(){
    winsEl.innerHTML = `Wins ${wins}`
    tiesEl.innerHTML = `Ties ${ties}`
    lossesEl.innerHTML = `Losses ${losses}`
}