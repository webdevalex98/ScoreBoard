let awayCount = document.getElementById("away-score")
let homeCount = document.getElementById("home-score")

let awayScore = 0
let homeScore = 0

function freeThrowAway() {
    awayScore += 1
    awayCount.textContent = awayScore
}

function doubleAway() {
    awayScore += 2
    awayCount.textContent = awayScore
}

function tripleAway() {
    awayScore += 3
    awayCount.textContent = awayScore
}

function freeThrowHome() {
    homeScore += 1
    homeCount.textContent = homeScore
}

function doubleHome() {
    homeScore += 2
    homeCount.textContent = homeScore
}

function tripleHome() {
    homeScore += 3
    homeCount.textContent = homeScore
}