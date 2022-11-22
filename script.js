


let data=["rock","paper","scissor"];

function buttonClick(value){

let number=Math.floor(Math.random()*3)
let sysData=data[number];

document.getElementById('inp-sys').value=sysData;
let userData=value;
console.log(userData);

document.getElementById('inp-user').value=userData;


if(sysData==userData){
    document.getElementById('display').innerHTML='Tie'
}else if(sysData=="scissor"&&userData=="rock"){
document.getElementById('display').innerHTML='!!! YOU WIN !!!'
}else if(sysData=="rock"&&userData=="paper"){
    document.getElementById('display').innerHTML='!!! YOU WIN !!!'
}else if(sysData=="paper"&&userData=="scissor"){
    document.getElementById('display').innerHTML='!!! YOU WIN !!!'
}else if(sysData=="rock"&&userData=="scissor"){
    document.getElementById('display').innerHTML='!!! SYSTEM WIN !!!'
}else if(sysData=="paper"&&userData=="rock"){
    document.getElementById('display').innerHTML='!!! SYSTEM WIN !!!'
}else if(sysData=="scissor"&&userData=="paper"){
    document.getElementById('display').innerHTML='!!! SYSTEM WIN !!!'
}
}