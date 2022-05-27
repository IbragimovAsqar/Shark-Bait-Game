let pontoonDistance = +prompt('Qirg`oqqacha masofani kiriting')
let sharkDistance = +prompt('Akulaning odamgacha masofasini kiriting')
let Delphin = +prompt('Defin bormi? (1 yoki 0)')
let humanSpeed = 5
let sharkSpeed = 15
let sharkTime, humanTime

if (Delphin == 1) {
    humanSpeed = humanSpeed * 2
}

sharkTime = sharkDistance / sharkSpeed
humanTime = pontoonDistance / humanSpeed

if (sharkTime > humanTime) {
    alert('Alive')
} else {
    alert('Shark Bait')
}