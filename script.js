const scorePc = document.getElementById("scorePc")
const scorePlayer = document.getElementById("scorePlayer")
const scoreRemiza = document.getElementById("scoreRemiza")

let playerScore = 0
let computerScore = 0
let remizaScore = 0
let history = []

let choices = [
  { choice: 'Kamen', count: 0 },
  { choice: 'Papier', count: 0 },
  { choice: 'Noznice', count: 0 }
]

function playgame() {
  alert('Hra zacina!')
  let userChoice = window.prompt("Napis pismenko: K = kamen, N = noznice, P = papier")
  console.log("Hrac: " + userChoice)
  let result = ""

  const computer = ["K", "N", "P"]
  let computerChoice = computer[Math.floor(Math.random() * computer.length)]
  console.log("Computer chose: " + computerChoice)

  

  if (userChoice === computerChoice) {
    result = 'REMIZA'
  } else {
    switch (userChoice) {
      case 'K':
        result = (computerChoice === 'N') ? 'VYHRA' : 'PREHRA'
        break
      case 'P':
        result = (computerChoice === 'K') ? 'VYHRA' : 'PREHRA'
        break
      case 'N':
        result = (computerChoice === 'P') ? 'VYHRA' : 'PREHRA'
        break
        default:
          alert("Nepodvadzaj! Zadaj K, N alebo P.")
          return
    }
  }

  alert(result + " Dalsie kolo?");
  console.log(result)

  switch (result) {
    case 'VYHRA':
      playerScore++
      scorePlayer.textContent = playerScore
      break
    case 'PREHRA':
      computerScore++
      scorePc.textContent = computerScore
      break
    case 'REMIZA':
      remizaScore++
      scoreRemiza.textContent = remizaScore
  }

  switch(userChoice) {
    case 'K':
      choices[0].count++
      break
    case 'P':
      choices[1].count++
      break
    case 'N':
      choices[2].count++
      break
   
  }
  switch(computerChoice) {
    case 'K':
      choices[0].count++
      break
    case 'P':
      choices[1].count++
      break
    case 'N':
      choices[2].count++
      break
   
  }

  console.log(`Kamen: ${choices[0].count} times`)
  console.log(`Papier: ${choices[1].count} times`)
  console.log(`Noznice: ${choices[2].count} times`)

  history.push({
    playerChoice: userChoice,
    computerChoice: computerChoice,
    result: result
  })

  console.log(history)
  const nextRoundBtn = document.createElement('button')
  nextRoundBtn.textContent = 'Dalsie kolo'
  document.body.appendChild(nextRoundBtn)
  nextRoundBtn.addEventListener()


}


