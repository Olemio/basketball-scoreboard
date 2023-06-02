// home guest score counters
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let homeCount = 0
let guestCount = 0

highlightLead() 

// home point btns
function homePoint1() {
    let sum = homeCount += 1
    homeScore.textContent = sum
    highlightLead()    
}
function homePoint2() {
    let sum = homeCount += 2
    homeScore.textContent = sum
    highlightLead()   
}
function homePoint3() {
    let sum = homeCount += 3
    homeScore.textContent = sum
    highlightLead()   
}

// guest point btns
function guestPoint1() {
    let sum = guestCount += 1
    guestScore.textContent = sum
    highlightLead() 
}
function guestPoint2() {
    let sum = guestCount += 2
    guestScore.textContent = sum
    highlightLead()   
}
function guestPoint3() {
    let sum = guestCount += 3
    guestScore.textContent = sum
    highlightLead()   
}

// new game btn

function newGame() {
    homeCount = 0
    guestCount = 0
    homeScore.textContent = 0
    guestScore.textContent = 0
    highlightLead()  
}

// highlight leader

function highlightLead() {
    if (homeCount === guestCount) {
        guestScore.style.boxShadow = "0 3px 0 yellow"
        homeScore.style.boxShadow = "0 3px 0 yellow"
    } else if (homeCount > guestCount) {
        homeScore.style.boxShadow = "0 3px 0 green"     
        guestScore.style.boxShadow = "0 3px 0 red"    
    } else if (guestCount > homeCount) {
        guestScore.style.boxShadow = "0 3px 0 green"      
        homeScore.style.boxShadow = "0 3px 0 red"   
    }
}