


let data = ["rock", "paper", "scissor"];
let userPoints = 0;
let sysPoints = 0;

// function for button click action

function buttonClick(value) {

    let number = Math.floor(Math.random() * 3)
    let sysData = data[number];

    document.getElementById('inp-sys').value = sysData;
    let userData = value;
    console.log(userData);

    document.getElementById('inp-user').value = userData;


    // checking the data and select the winner
    if (sysData == userData) {
        document.getElementById('display').innerHTML = 'Tie'
    } else if (sysData == "scissor" && userData == "rock") {
        document.getElementById('display').innerHTML = 'YOU WIN'
        userPoints++;
    } else if (sysData == "rock" && userData == "paper") {
        document.getElementById('display').innerHTML = 'YOU WIN'
        userPoints++;
    } else if (sysData == "paper" && userData == "scissor") {
        document.getElementById('display').innerHTML = 'YOU WIN'
        userPoints++;
    } else if (sysData == "rock" && userData == "scissor") {
        document.getElementById('display').innerHTML = 'SYSTEM WIN'
        sysPoints++;
    } else if (sysData == "paper" && userData == "rock") {
        document.getElementById('display').innerHTML = 'SYSTEM WIN '
        sysPoints++;
    } else if (sysData == "scissor" && userData == "paper") {
        document.getElementById('display').innerHTML = 'SYSTEM WIN'
        sysPoints++;
    }

    // shows  the points
    document.getElementById('pts').innerHTML = userPoints;
    document.getElementById('pts-s').innerHTML = sysPoints;

    // checking the points, choose the  winner and reload
    if (userPoints == 5 || sysPoints == 5) {
        if (userPoints == 5) {
            alert('!!  YOU WIN !!')
        } else if (sysPoints == 5) {
            alert('!! SYSTEM WIN !!')
        }
        setTimeout(() => {
            location.reload()
        }, 2000)
    }
}